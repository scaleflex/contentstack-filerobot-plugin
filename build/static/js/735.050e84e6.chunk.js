"use strict";(self.webpackChunkmarketplace_app_boilerplate=self.webpackChunkmarketplace_app_boilerplate||[]).push([[735],{6735:(e,t,i)=>{i.d(t,{SfxGooglePickerView:()=>h});var r=i(6386),o=i(1272),n=i(5648);let s=!1,a=null;const l=new Map;function c(e){return new Promise(((t,i)=>{if(document.querySelector(`script[src="${e}"]`))return void t();const r=document.createElement("script");r.src=e,r.async=!0,r.onload=()=>t(),r.onerror=()=>i(new Error(`Failed to load ${e}`)),document.head.appendChild(r)}))}var d=Object.defineProperty,p=(e,t,i,r)=>{for(var o,n=void 0,s=e.length-1;s>=0;s--)(o=e[s])&&(n=o(t,i,n)||n);return n&&d(t,i,n),n};const u=class extends r.oi{constructor(){super(...arguments),this.t=n.w,this.companionUrl="",this.googlePickerConfig={clientId:"",apiKey:"",appId:""},this.multi=!0,this.maxSelect=null,this._busy=!1,this._error=null,this._onClose=()=>{this.dispatchEvent(new CustomEvent("connector-close",{bubbles:!0,composed:!0}))},this._handleConnect=async()=>{if(!this._busy){this._busy=!0,this._error=null;try{await(s?Promise.resolve():a||(a=Promise.all([c("https://accounts.google.com/gsi/client"),c("https://apis.google.com/js/api.js")]).then((()=>new Promise(((e,t)=>{window.gapi?window.gapi.load("picker",{callback:()=>e(),onerror:()=>t(new Error("Failed to load Google Picker library")),timeout:1e4,ontimeout:()=>t(new Error("Timed out loading Google Picker library"))}):t(new Error("gapi failed to initialise"))})))).then((()=>{s=!0})).catch((e=>{throw a=null,e})),a));const e=await function(e){const t=l.get(e);return t&&Date.now()<t.expiresAt-6e4?Promise.resolve(t.token):new Promise(((t,i)=>{var r,o;null!=(o=null==(r=window.google)?void 0:r.accounts)&&o.oauth2?window.google.accounts.oauth2.initTokenClient({client_id:e,scope:"https://www.googleapis.com/auth/drive.file",callback:r=>{r.error?i(new Error(r.error_description||r.error)):(l.set(e,{token:r.access_token,expiresAt:Date.now()+1e3*r.expires_in}),t(r.access_token))},error_callback:e=>{"popup_closed"!==e.type?i(new Error(e.message||"OAuth token request failed")):t("")}}).requestAccessToken({prompt:""}):i(new Error("Google Identity Services not loaded"))}))}(this.googlePickerConfig.clientId);if(!e)return void(this._busy=!1);const t=await function(e,t,i){let r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],o=arguments.length>4?arguments[4]:void 0;return new Promise(((n,s)=>{var a;if(null==(a=window.google)||!a.picker)return void s(new Error("Google Picker library not loaded"));const l=new window.google.picker.DocsView;l.setIncludeFolders(!0),l.setSelectFolderEnabled(!1);const c=(new window.google.picker.PickerBuilder).addView(l).setOAuthToken(e).setDeveloperKey(t).setAppId(i).setCallback((e=>{e.action===google.picker.Action.PICKED&&e.docs?n(e.docs.map((e=>({id:e.id,name:e.name,mimeType:e.mimeType,sizeBytes:e.sizeBytes??0})))):(e.action===google.picker.Action.CANCEL||"loaded"!==e.action&&"ready"!==e.action)&&n([])}));r&&c.enableFeature(window.google.picker.Feature.MULTISELECT_ENABLED),null!=o&&o>0&&c.setMaxItems(o);try{c.build().setVisible(!0)}catch(d){s(d instanceof Error?d:new Error(String(d)))}}))}(e,this.googlePickerConfig.apiKey,this.googlePickerConfig.appId,this.multi,this.maxSelect);if(0===t.length)return void(this._busy=!1);const i=t.map((t=>({companionUrl:this.companionUrl,provider:"google-drive",token:"",requestPath:"",fileId:t.id,name:t.name,mimeType:t.mimeType,size:t.sizeBytes,thumbnail:null,pickerAccessToken:e})));this.dispatchEvent(new CustomEvent("connector-files-selected",{detail:{files:i},bubbles:!0,composed:!0}))}catch(e){this._error=e instanceof Error?e.message:String(e)}finally{this._busy=!1}}}}get _providerDef(){return(0,n.o)(["google-drive"])[0]??null}get _providerLabel(){var e;return(null==(e=this._providerDef)?void 0:e.label)??"Google Drive"}render(){const e=this._providerDef;return r.dy`
      ${this._renderHeader()}
      <div class="auth-view">
        <div class="auth-glow"></div>
        <div class="auth-logo-wrap">
          <div class="auth-ring">
            <div class="auth-logo">
              ${null!=e&&e.brandHtml?r.dy`<span ${(0,n.y)({display:"flex","align-items":"center","justify-content":"center",transform:"scale(2.2)"})}>${(0,n.z)(e)}</span>`:r.Ld}
            </div>
          </div>
        </div>
        <div class="auth-content">
          <div class="auth-title">
            ${this.t("connectProvider","Connect {{provider}}",{provider:this._providerLabel})}
          </div>
          <div class="auth-text">
            ${this.t("pickerHint","Select files from your {{provider}} account",{provider:this._providerLabel})}
          </div>
          ${null!=this.maxSelect&&this.maxSelect>0?r.dy`<div class="auth-text">${this.t("pickerMaxFiles","You can select up to {{count}} files",{count:this.maxSelect})}</div>`:r.Ld}
        </div>
        ${this._error?r.dy`<div class="error-text">${this._error}</div>`:r.Ld}
        <button
          class="connect-btn"
          ?disabled=${this._busy}
          @click=${this._handleConnect}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <path d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4M10 17l5-5-5-5M15 12H3"/>
          </svg>
          ${this._busy?this.t("connecting","Connecting\u2026"):this.t("selectFromProvider","Select from {{provider}}",{provider:this._providerLabel})}
        </button>
      </div>
    `}_renderHeader(){const e=this._providerDef;return r.dy`
      <div class="browser-header">
        <div class="header-brand">
          ${null!=e&&e.brandHtml?r.dy`<div class="header-logo">${(0,n.z)(e)}</div>`:r.Ld}
          <span class="browser-title">${this._providerLabel}</span>
        </div>
        <button
          class="close-btn"
          @click=${this._onClose}
          title=${this.t("close","Close")}
          aria-label=${this.t("close","Close")}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>
    `}};u.styles=r.iv`
    :host {
      display: flex;
      flex-direction: column;
      position: relative;
      flex: 1 1 0;
      min-height: 0;
      height: 100%;
      font-family: var(--sfx-up-font, 'Inter', system-ui, -apple-system, sans-serif);
      color: var(--sfx-up-text, #1e293b);
      background: var(--sfx-up-bg, #fff);
    }

    /* --- Header --- */
    .browser-header {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 14px 20px;
      border-bottom: 1px solid var(--sfx-up-border-light, #f1f5f9);
      flex-shrink: 0;
    }

    .close-btn {
      width: 32px;
      height: 32px;
      border: none;
      background: var(--sfx-up-border-light, #f1f5f9);
      border-radius: 8px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--sfx-up-text-secondary, #475569);
      transition: all 0.15s;
      flex-shrink: 0;
    }

    .close-btn:hover {
      background: var(--sfx-up-border, #e8edf5);
      color: var(--sfx-up-text, #1e293b);
    }

    .close-btn svg {
      width: 18px;
      height: 18px;
    }

    .header-brand {
      display: flex;
      align-items: center;
      gap: 10px;
      flex: 1;
      min-width: 0;
    }

    .header-logo {
      width: 28px;
      height: 28px;
      border-radius: 7px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .browser-title {
      font-size: 15px;
      font-weight: 700;
      color: var(--sfx-up-text, #1e293b);
    }

    /* --- Auth view --- */
    .auth-view {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 20px;
      padding: 40px 32px;
      text-align: center;
      position: relative;
      overflow: hidden;
    }

    .auth-glow {
      position: absolute;
      width: 280px;
      height: 280px;
      border-radius: 50%;
      background: radial-gradient(circle, var(--sfx-up-primary-bg, #eff6ff) 0%, transparent 70%);
      opacity: 0.7;
      pointer-events: none;
    }

    .auth-logo-wrap {
      position: relative;
      z-index: 1;
    }

    .auth-ring {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      border: 1.5px dashed var(--sfx-up-border, #e8edf5);
      display: flex;
      align-items: center;
      justify-content: center;
      animation: slowSpin 20s linear infinite;
    }

    .auth-logo {
      width: 64px;
      height: 64px;
      border-radius: 18px;
      background: #fff;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08), 0 1px 4px rgba(0, 0, 0, 0.04);
      display: flex;
      align-items: center;
      justify-content: center;
      animation: slowSpin 20s linear infinite reverse;
    }

    .auth-logo svg {
      width: 34px;
      height: 34px;
    }

    .auth-content {
      position: relative;
      z-index: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
    }

    .auth-title {
      font-size: 16px;
      font-weight: 700;
      color: var(--sfx-up-text, #1e293b);
    }

    .auth-text {
      font-size: 13px;
      color: var(--sfx-up-text-muted, #94a3b8);
      max-width: 260px;
      line-height: 1.5;
    }

    .connect-btn {
      position: relative;
      z-index: 1;
      height: 42px;
      padding: 0 28px;
      border: none;
      border-radius: 11px;
      background: linear-gradient(135deg, var(--sfx-up-primary, #2563eb), var(--sfx-up-primary-mid, #3b82f6));
      color: var(--primary-foreground, #fff);
      font-family: inherit;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;
      box-shadow: 0 4px 16px var(--sfx-up-primary-glow, rgba(37, 99, 235, 0.25));
      display: flex;
      align-items: center;
      gap: 8px;
      margin-top: 4px;
    }

    .connect-btn:hover {
      transform: translateY(-1px);
      box-shadow: 0 6px 24px var(--sfx-up-primary-glow, rgba(37, 99, 235, 0.35));
    }

    .connect-btn:active {
      transform: translateY(0);
    }

    .connect-btn:disabled {
      opacity: 0.6;
      cursor: not-allowed;
      transform: none;
    }

    .connect-btn svg {
      width: 16px;
      height: 16px;
    }

    .error-text {
      font-size: 13px;
      color: var(--sfx-up-error, #dc2626);
      max-width: 300px;
      line-height: 1.5;
      position: relative;
      z-index: 1;
    }

    @keyframes slowSpin {
      to { transform: rotate(360deg); }
    }

    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .auth-view { animation: fadeUp 0.35s ease both; }

    @media (prefers-reduced-motion: reduce) {
      .auth-ring, .auth-logo { animation: none; }
      .auth-view { animation: none; }
    }
  `;let h=u;p([(0,o.Cb)({attribute:!1})],h.prototype,"t"),p([(0,o.Cb)({attribute:!1})],h.prototype,"companionUrl"),p([(0,o.Cb)({attribute:!1})],h.prototype,"googlePickerConfig"),p([(0,o.Cb)({type:Boolean})],h.prototype,"multi"),p([(0,o.Cb)({attribute:!1})],h.prototype,"maxSelect"),p([(0,o.SB)()],h.prototype,"_busy"),p([(0,o.SB)()],h.prototype,"_error")}}]);
//# sourceMappingURL=735.050e84e6.chunk.js.map