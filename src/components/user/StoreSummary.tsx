import Link from 'next/link';
import { FaRegCircle } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';

export default function StoreSummary({
  id,
  name,
  furigana,
  tags,
  open,
  thumbnail,
  images,
}: {
  id: string;
  name: string;
  furigana: string;
  tags: string[];
  open: boolean;
  thumbnail: string;
  images: string[];
}) {
  return (
    <Link className='flex flex-col gap-2' href={`/store/${id}`}>
      <div className='flex flex-col gap-3 lg:flex-row lg:gap-5'>
        <img
          src={thumbnail}
          alt={name}
          className='h-32 aspect-video object-cover'
        />
        <div className='flex gap-2 lg:hidden'>
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={name}
              className='h-16 aspect-square object-cover'
            />
          ))}
        </div>
        <div>
          <h2 className='text-2xl font-bold my-1'>{name}</h2>
          <p className='text-sm text-gray-500 my-1'>{furigana}</p>
          <p className='text-sm text-gray-500 my-1'>{tags.join(', ')}</p>
          {open ? (
            <p className='text-sm my-2 flex items-center'>
              <FaRegCircle className='mr-1 text-red-500' size={20} /> 営業中
            </p>
          ) : (
            <p className='text-sm my-2 flex items-center'>
              <FaXmark className='mr-1 text-blue-500' size={24} /> 営業時間外
            </p>
          )}
        </div>
      </div>
      <div className='hidden gap-2 lg:flex'>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={name}
            className='h-16 aspect-square object-cover'
          />
        ))}
      </div>
    </Link>
  );
}
