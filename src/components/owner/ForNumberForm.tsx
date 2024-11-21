'use client';
import React, { useState } from 'react';

interface ForNumberProp {
  width: number;
  height: number;
}

const ForNumberForm: React.FC<ForNumberProp> = ({ width, height }) => {
  const [input, setInput] = useState('');

  return (
    <div className='w-full flex justify-start my-4 p-4 rounded-lg shadow-md bg-white'>
      <div className='relative m-1'>
        <input
          type='number'
          onChange={e => setInput(e.target.value)}
          style={{
            marginLeft: '0',
            width: `${width}px`,
            height: `${height}px`,
          }}
          className='block px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2'
        />
        <div className='absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none'>
          {/* Here you can add an adornment or icon if needed */}
        </div>
      </div>
    </div>
  );
};

export default ForNumberForm;
