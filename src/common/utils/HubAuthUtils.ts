export interface HubAuthData {
  sessionUuid: string;
  token: string;
  projectUuid: string;
  companyUuid: string;
  sassKey: string;
}

const HUB_OAUTH_URL = "https://hub.scaleflex.com/oauth2/login";
const HUB_SESSION_API_BASE = process.env.REACT_APP_HUB_SESSION_API_BASE ?? "";
const STORAGE_KEY = "sfx_hub_auth";

const getStoredHubAuth = (): HubAuthData | null => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
};

const saveHubAuth = (data: HubAuthData): void => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

const clearHubAuth = (): void => {
  localStorage.removeItem(STORAGE_KEY);
};

// registers a freshly-logged-in Hub session with the plugins-oauth2 backend, which then
// keeps its session/SASS key renewed server-to-server (see plugins-oauth2's
// ContentstackHubSession model + hourly sfx:renew-contentstack-sessions schedule)
const registerHubSession = async (data: HubAuthData): Promise<void> => {
  await fetch(`${HUB_SESSION_API_BASE}/api/contentstack/hub-sessions`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(data),
  });
};

// fetches the current (backend-renewed) session/SASS key for a known session_uuid;
// null if the backend no longer has this session (never registered, or pruned after
// repeated renewal failures) — the caller should treat that as "log in again"
const fetchCurrentHubSession = async (sessionUuid: string): Promise<HubAuthData | null> => {
  try {
    const response = await fetch(
      `${HUB_SESSION_API_BASE}/api/contentstack/hub-sessions/${sessionUuid}`,
      { headers: { accept: "application/json" } }
    );
    if (!response.ok) return null;
    return await response.json();
  } catch {
    return null;
  }
};

// opens the Hub OAuth popup and resolves with the session data it posts back
const openHubLoginPopup = (): Promise<HubAuthData> =>
  new Promise((resolve, reject) => {
    const authWindow = window.open(
      HUB_OAUTH_URL,
      "_blank",
      "toolbar=0,location=0,directories=0,status=1,menubar=0,titlebar=0,scrollbars=1,resizable=1,width=600,height=650"
    );

    if (!authWindow) {
      reject(new Error("Popup blocked. Please allow popups and try again."));
      return;
    }

    let settled = false;

    const cleanup = () => {
      window.removeEventListener("message", handleAuth);
      clearInterval(pollClosed);
    };

    const handleAuth = (event: MessageEvent) => {
      if (event.source !== authWindow) return;
      const data =
        typeof event.data === "string" ? JSON.parse(event.data) : event.data;
      settled = true;
      cleanup();
      authWindow.close();
      if (!data?.sessionUuid || !data?.sassKey) {
        reject(new Error("Access denied (session data is missing)."));
      } else {
        resolve(data);
      }
    };

    const pollClosed = window.setInterval(() => {
      if (authWindow.closed && !settled) {
        cleanup();
        reject(new Error("Login window was closed before completing."));
      }
    }, 500);

    window.addEventListener("message", handleAuth);
  });

const HubAuthUtils = {
  getStoredHubAuth,
  saveHubAuth,
  clearHubAuth,
  registerHubSession,
  fetchCurrentHubSession,
  openHubLoginPopup,
};

export default HubAuthUtils;
