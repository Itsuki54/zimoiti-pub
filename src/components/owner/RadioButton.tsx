'use client';

import React from 'react';

interface RadioButtonProps {
  label: string;
  value: string;
  checked: boolean;
  onChange: (value: string) => void;
}

export const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  value,
  checked,
  onChange,
}) => {
  return (
    <label className='flex items-center text-lg'>
      <input
        className='w-6 h-6 m-1'
        type='radio'
        value={value}
        checked={checked}
        onChange={() => onChange(value)}
      />
      <span className='text-white mr-3'>{label}</span>
    </label>
  );
};

export default RadioButton;
