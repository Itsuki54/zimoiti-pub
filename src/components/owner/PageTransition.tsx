import React from 'react';

type toPageNameDate = {
  toPageName: string;
};

const PageTransition = ({ toPageName }: toPageNameDate) => {
  return (
    <span className='relative group'>
      <span
        className={[
          'whitespace-nowrap',
          'rounded',
          'bg-black',
          'px-2',
          'py-1',
          'text-white',
          'absolute',
          '-top-12',
          'left-1/2',
          '-translate-x-1/2',
          'before:content-[\'\']',
          'before:absolute',
          'before:-translate-x-1/2',
          'before:left-1/2',
          'before:top-full',
          'before:border-4',
          'before:border-transparent',
          'before:border-t-black',
          'opacity-0',
          'group-hover:opacity-100',
          'transition',
          'pointer-events-none',
        ].join(' ')}
      >
        {toPageName}
      </span>
      <button
        data-tooltip-target='tooltip-default'
        type='button'
        className='text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 me-2 mb-2 font-bold'
      >
        次のページへ
      </button>
    </span>
  );
};

export default PageTransition;
