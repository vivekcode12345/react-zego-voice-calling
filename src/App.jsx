import CallPanel from './components/CallPanel';
import { useZegoCall } from './hooks/useZegoCall';

function App() {
  const { token, userId, userName, startVoiceCall, startVideoCall } = useZegoCall();

  return (
    <CallPanel
      token={token}
      userId={userId}
      userName={userName}
      onVoiceCall={startVoiceCall}
      onVideoCall={startVideoCall}
    />
  );
}

export default App