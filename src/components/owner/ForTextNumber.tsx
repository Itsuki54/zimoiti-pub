'use client';
import React, { useState } from 'react';

interface ForTextProp {
  width: number;
  height: number;
}

const ForTextForm: React.FC<ForTextProp> = ({ width, height }) => {
  const [text, setText] = useState('');

  const resizeTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value); // 入力されたテキストを更新
  };

  return (
    <div className='mx-4'>
      <textarea
        style={{
          borderRadius: '10px',
          width: `${width}px`,
          height: `${height}px`,
        }}
        placeholder='テキストを入力してください'
        value={text}
        onChange={e => resizeTextArea(e)}
      >
      </textarea>
    </div>
  );
};

export default ForTextForm;
