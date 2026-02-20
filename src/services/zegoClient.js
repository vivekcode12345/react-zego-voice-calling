import { ZIM } from 'zego-zim-web';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt/zego-uikit-prebuilt.js';

export const invitationTypes = {
  voice: ZegoUIKitPrebuilt.InvitationTypeVoiceCall,
  video: ZegoUIKitPrebuilt.InvitationTypeVideoCall,
};

export function createZegoClient(token) {
  const client = ZegoUIKitPrebuilt.create(token);
  client.addPlugins({ ZIM });
  return client;
}

export function generateTestToken({ appId, serverSecret, userId, userName }) {
  return ZegoUIKitPrebuilt.generateKitTokenForTest(
    appId,
    serverSecret,
    null,
    userId,
    userName,
  );
}
