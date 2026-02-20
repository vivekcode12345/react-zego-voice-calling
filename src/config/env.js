export const zegoEnv = {
  appId: Number(import.meta.env.VITE_ZEGO_APP_ID || 0),
  serverSecret: import.meta.env.VITE_ZEGO_SERVER_SECRET || '',
};

export const hasValidZegoEnv = Boolean(zegoEnv.appId && zegoEnv.serverSecret);
