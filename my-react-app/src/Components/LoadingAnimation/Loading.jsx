function Loading() {
  return (
    <div className="m-0 p-0 min-h-screen flex items-center justify-center">
      <div
        className="relative w-[150px] h-[150px] bg-[#ccc] border-[5px] border-white rounded-full overflow-hidden"
        style={{
          boxShadow: '0 0 0 5px #4973ff',
        }}
      >
        <div
          className="relative w-full h-full bg-[#4973ff] rounded-full"
          style={{
            boxShadow: 'inset 0 0 50px rgba(0, 0, 0, 0.5)',
          }}
        >
          <div
            className="absolute w-[200%] h-[200%] top-0 left-1/2 bg-white rounded-[45%]"
            style={{
              transform: 'translate(-50%, -75%)',
              animation: 'animate 5s linear infinite',
            }}
          ></div>
          <div
            className="absolute w-[200%] h-[200%] top-0 left-1/2 bg-white opacity-50 rounded-[40%]"
            style={{
              transform: 'translate(-50%, -75%)',
              animation: 'animate 10s linear infinite',
            }}
          ></div>
        </div>
      </div>

      <style>{`
        @keyframes animate {
          0% {
            transform: translate(-50%, -75%) rotate(0deg);
          }
          100% {
            transform: translate(-50%, -75%) rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}

export default Loading;