const contentstack = require('@contentstack/marketplace-sdk');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

function getEnvVar(key) {
  let val = process.env[key] || '';
  // Loại bỏ comment đằng sau giá trị (ví dụ: EMAIL=abc@domain.com #comment)
  val = val.split('#')[0].trim();
  // Loại bỏ dấu ngoặc kép nếu có
  return val.replace(/^["']|["']$/g, '');
}

/**
 * Script cập nhật App Manifest lên Contentstack Developer Hub sử dụng @contentstack/marketplace-sdk
 */
async function updateManifest() {
  try {
    const manifestPath = path.join(__dirname, '../manifest.json');
    if (!fs.existsSync(manifestPath)) {
      throw new Error(`Không tìm thấy file manifest.json tại: ${manifestPath}`);
    }

    const manifestData = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));

    // Đọc Organization UID & App UID từ .env hoặc manifest.json
    const orgUid = getEnvVar('ORG_ID') || getEnvVar('CONTENTSTACK_ORG_UID');
    const appUid = (manifestData.uid || getEnvVar('APP_UID') || getEnvVar('CONTENTSTACK_APP_UID')).trim();

    if (!orgUid) {
      throw new Error('Thiếu ORG_ID (hoặc CONTENTSTACK_ORG_UID) trong file .env!');
    }

    if (!appUid) {
      throw new Error('Thiếu App UID! Vui lòng đảm bảo manifest.json có trường "uid" hoặc khai báo APP_UID trong file .env.');
    }

    // Xác thực tài khoản (Hỗ trợ AUTHTOKEN, OAUTH_TOKEN, hoặc EMAIL + PASSWORD)
    const authtoken = getEnvVar('AUTHTOKEN') || getEnvVar('CONTENTSTACK_AUTHTOKEN');
    const oauthToken = getEnvVar('OAUTH_TOKEN') || getEnvVar('CONTENTSTACK_OAUTH_TOKEN');
    const email = getEnvVar('EMAIL') || getEnvVar('CONTENTSTACK_EMAIL');
    const password = getEnvVar('PASSWORD') || getEnvVar('CONTENTSTACK_PASSWORD');

    const clientConfig = {};
    const region = getEnvVar('REGION') || getEnvVar('CONTENTSTACK_REGION');
    if (region) {
      clientConfig.region = region;
    }

    let client;
    if (authtoken) {
      clientConfig.authtoken = authtoken;
      client = contentstack.client(clientConfig);
    } else if (oauthToken) {
      clientConfig.authorization = oauthToken;
      client = contentstack.client(clientConfig);
    } else if (email && password) {
      client = contentstack.client(clientConfig);
      console.log(`Đang đăng nhập vào Contentstack với tài khoản email: ${email}...`);
      await client.login({ email, password });
    } else {
      throw new Error('Thiếu thông tin xác thực! Vui lòng nhập AUTHTOKEN, OAUTH_TOKEN hoặc (EMAIL và PASSWORD) thực tế vào file .env');
    }

    console.log(`Đang truy vấn Developer Hub (Org UID: ${orgUid}, App UID: ${appUid})...`);

    // Fetch thông tin app hiện tại từ Developer Hub
    const app = await client.marketplace(orgUid).app(appUid).fetch();

    // Gán dữ liệu mới từ manifest.json
    const payload = {
      name: manifestData.name,
      description: manifestData.description,
      icon: manifestData.icon,
      target_type: manifestData.target_type,
      ui_location: manifestData.ui_location,
      webhook: manifestData.webhook,
      oauth: manifestData.oauth,
      hosting: manifestData.hosting
    };

    // Loại bỏ các trường undefined
    Object.keys(payload).forEach((key) => payload[key] === undefined && delete payload[key]);

    Object.assign(app, payload);

    // Tiến hành gửi yêu cầu update
    const updatedApp = await app.update();
    console.log('\x1b[32m%s\x1b[0m', `[BÁO CÁO] Cập nhật App Manifest "${updatedApp.name || manifestData.name}" thành công!`);
  } catch (error) {
    console.error('\x1b[31m%s\x1b[0m', `[LỖI] Cập nhật App Manifest thất bại:`, error.message || error);
    process.exit(1);
  }
}

updateManifest();
