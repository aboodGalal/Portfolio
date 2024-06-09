import React from 'react'

function SkeltonLoader() {
  return (
    <div className="skeleton-loader container mx-auto flex flex-col-reverse md:flex-row-reverse gap-24 lg:gap-[0px]
    justify-center md:justify-around  items-center animate-pulse opacity-30">
      <div
        style={{
          borderRadius: '20px',
          boxShadow: '5px 5px 20px 0px  rgba(128, 128, 128, 0.5)',
        }}
        className="bg-gray-800 opacity-70 animate-pulse z-10 lg:w-[250px] lg:h-[250px] mx-3 md:mx-0 mb-10  min-w-[250px] h-[400px]  flex justify-center items-center"
      >
        <span className='icon-camera w-[40px] h-[40px] text-white text-[40px] opacity-25'></span>
      </div>
      <div className="text-[white] md:self-start md:mt-10 flex flex-col justify-center items-center min-w-[330px] h-full md:justify-start md:items-start ">
        <span className='w-[300px] h-5 bg-gray-800 animate-pulse my-3 opacity-70'></span>
        <span className='w-[500px] h-10 bg-gray-800 animate-pulse my-3 opacity-70'></span>
        <span className='w-[350px] h-2 bg-gray-800 animate-pulse my-3 opacity-70'></span>
        <span className='w-[300px] h-5 bg-gray-800 animate-pulse my-3 opacity-70'></span>
        <span className='w-[300px] h-5 bg-gray-800 animate-pulse my-3 opacity-70'></span>
        <span className='w-[500px] h-10 bg-gray-800 animate-pulse my-3 opacity-70'></span>
        <span className='w-[350px] h-2 bg-gray-800 animate-pulse my-3 opacity-70'></span>
        <span className='w-[300px] h-5 bg-gray-800 animate-pulse my-3 opacity-70'></span>
      </div>
    </div>
  )
}

export default SkeltonLoader