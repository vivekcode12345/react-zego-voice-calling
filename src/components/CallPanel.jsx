export default function CallPanel({
  token,
  userId,
  userName,
  onVoiceCall,
  onVideoCall,
}) {
  return (
    <div className='w-full h-screen bg-black flex items-center justify-center'>
      <div className='w-125 h-100 bg-[#0d1014] border-2 border-[#313030] flex flex-col items-center justify-center gap-5'>
        <img src='/voice-call-logo.svg' alt='Voice Call Logo' className='w-16 h-16' />
        <h1 className='text-white text-[22px] font-semibold'>React ZEGO Voice Calling</h1>
        {!token && (
          <p className='text-red-400 text-center px-4'>
            Missing ZEGO env config. Create .env.local with VITE_ZEGO_APP_ID and VITE_ZEGO_SERVER_SECRET.
          </p>
        )}
        <h2 className='text-[white] text-[20px]'><span className='text-blue-500'>UserName :</span>{userName}</h2>
        <h2 className='text-[white] text-[20px]'><span className='text-blue-500'>UserID :</span>{userId}</h2>
        <button onClick={onVoiceCall} className='w-50 cursor-pointer h-12.5 rounded-2xl bg-white text-black text-[20px]'>Voice Call</button>
        <button onClick={onVideoCall} className='w-50 h-12.5 rounded-2xl bg-white text-black cursor-pointer text-[20px]'>Video Call</button>
      </div>
    </div>
  );
}
