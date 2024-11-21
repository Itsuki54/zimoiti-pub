'use client';

import React from 'react';
import {
  useCallback,
  useState,
} from 'react';

const TimeFrame = () => {
  const [start, setStart] = useState<string>('');
  const [end, setEnd] = useState<string>('');
  const handleChangeStart = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target) {
        setStart(e.target.value);
      }
    },
    [],
  );
  const handleChangeEnd = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target) {
        setEnd(e.target.value);
      }
    },
    [],
  );
  return (
    <div className='flex items-center gap-2'>
      <input
        type='text'
        value={start}
        onChange={handleChangeStart}
        className='w-16 px-2 focus:outline-none'
        placeholder='開始'
      />
      <h1 className='text-white font-bold'>〜</h1>
      <input
        type='text'
        value={end}
        onChange={handleChangeEnd}
        className='w-16 px-2 focus:outline-none'
        placeholder='終了'
      />
    </div>
  );
};

export default TimeFrame;
