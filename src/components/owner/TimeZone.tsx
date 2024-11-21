import React from 'react';

const TimeZone = () => {
  return (
    <div className='flex items-center gap-2'>
      <input
        type='text'
        className='w-16 px-2 focus:outline-none'
        placeholder='開始'
      />
      <h1 className='text-white font-bold'>〜</h1>
      <input
        type='text'
        className='w-16 px-2 focus:outline-none'
        placeholder='終了'
      />
    </div>
  );
};

export default TimeZone;
