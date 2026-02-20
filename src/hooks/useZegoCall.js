import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { hasValidZegoEnv, zegoEnv } from '../config/env';
import { createZegoClient, generateTestToken, invitationTypes } from '../services/zegoClient';

function generateUserIdentity() {
  const generatedUserId = `user${Math.floor(Math.random() * 1000)}`;
  return {
    userId: generatedUserId,
    userName: `react_${generatedUserId}`,
  };
}

export function useZegoCall() {
  const clientRef = useRef(null);
  const [userIdentity] = useState(generateUserIdentity);

  const token = useMemo(() => {
    if (!hasValidZegoEnv) return null;
    return generateTestToken({
      appId: zegoEnv.appId,
      serverSecret: zegoEnv.serverSecret,
      userId: userIdentity.userId,
      userName: userIdentity.userName,
    });
  }, [userIdentity.userId, userIdentity.userName]);

  useEffect(() => {
    if (!token) return;
    clientRef.current = createZegoClient(token);
  }, [token]);

  const invite = useCallback(async (callType) => {
    if (!clientRef.current) {
      alert('Call service is not ready. Set VITE_ZEGO_APP_ID and VITE_ZEGO_SERVER_SECRET in .env.local.');
      return;
    }

    const targetUser = {
      userID: prompt("Enter callee's userId"),
      userName: prompt("Enter callee's userName"),
    };

    if (!targetUser.userID || !targetUser.userName) return;

    try {
      await clientRef.current.sendCallInvitation({
        callees: [targetUser],
        callType,
        timeout: 60,
      });
    } catch (error) {
      console.warn(error);
    }
  }, []);

  const startVoiceCall = useCallback(() => invite(invitationTypes.voice), [invite]);
  const startVideoCall = useCallback(() => invite(invitationTypes.video), [invite]);

  return {
    token,
    userId: userIdentity.userId,
    userName: userIdentity.userName,
    startVoiceCall,
    startVideoCall,
  };
}
