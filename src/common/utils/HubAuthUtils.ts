export interface HubAuthData {
  sessionUuid: string;
  token: string;
  projectUuid: string;
  companyUuid: string;
  sassKey: string;
}

const HUB_OAUTH_URL = "https://hub.scaleflex.com/oauth2/login";
const HUB_API_BASE = "https://hub.scaleflex.com/api";
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

// fetches a fresh SASS key for the project using the current session; null if the session can't authenticate
const renewSassKey = async (auth: HubAuthData): Promise<string | null> => {
  try {
    const response = await fetch(`${HUB_API_BASE}/project/${auth.projectUuid}`, {
      headers: {
        accept: "application/json",
        "x-session-token": auth.sessionUuid,
        "x-company-token": auth.companyUuid,
      },
    });
    const result = await response.json();
    if (!response.ok || result?.status !== "success") return null;
    return result?.keychain?.tokens?.airstore_key ?? null;
  } catch {
    return null;
  }
};

// extends the current session and returns its (possibly rotated) uuid; null if it can't be renewed
const renewSession = async (auth: HubAuthData): Promise<string | null> => {
  try {
    const response = await fetch(`${HUB_API_BASE}/session/${auth.sessionUuid}/renew`, {
      method: "POST",
      headers: {
        accept: "application/json",
        "x-session-token": auth.sessionUuid,
        "x-company-token": auth.companyUuid,
        "x-project-token": auth.projectUuid,
      },
    });
    const result = await response.json();
    if (!response.ok || result?.status !== "success") return null;
    return result?.session_uuid ?? null;
  } catch {
    return null;
  }
};

// runs both renewals concurrently; a fresh SASS key is required, a renewed session uuid is best-effort
const renewHubAuth = async (stored: HubAuthData): Promise<HubAuthData | null> => {
  const [newSassKey, newSessionUuid] = await Promise.all([
    renewSassKey(stored),
    renewSession(stored),
  ]);

  if (!newSassKey) return null;

  return {
    ...stored,
    sassKey: newSassKey,
    sessionUuid: newSessionUuid ?? stored.sessionUuid,
  };
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
  renewHubAuth,
  openHubLoginPopup,
};

export default HubAuthUtils;
