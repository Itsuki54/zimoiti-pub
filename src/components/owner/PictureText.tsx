import React from 'react';

type PictureTextDate = {
  src: string;
  alt: string;
  name: string;
};

const PictureText = ({ src, alt, name }: PictureTextDate) => {
  return (
    <div>
      <img
        className='w-64 rounded-lg shadow-md shadow-green-100'
        src={src}
        alt={alt}
      />
      <h1 className='text-white pt-1 pr-40'>{name}</h1>
    </div>
  );
};

export default PictureText;
