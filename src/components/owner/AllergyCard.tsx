import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import {
  FaRegCircle,
  FaTimes,
} from 'react-icons/fa';

interface AllergyCardProps {
  imageUrl: string;
  allergyname: string;
  size: number;
  index: number;
  setAllergy: (type: string, allergy: string) => void;
}

const AllergyCard: React.FC<AllergyCardProps> = ({
  imageUrl,
  allergyname,
  size,
  setAllergy,
}) => {
  const [image, setImage] = useState<boolean>(false);

  return (
    <button
      className='flex flex-col items-center relative rounded-lg shadow-lg px-2 py-3 bg-white'
      onClick={e => {
        e.preventDefault();
        setAllergy(image ? 'remove' : 'add', allergyname);
        setImage(!image);
      }}
    >
      <div className='image flex flex-col items-center'>
        <Image
          className='w-full aspect-square object-contain p-4'
          src={imageUrl}
          width={size}
          height={size}
          alt={allergyname}
        />
        <span className='text-center text-2xl w-full'>{allergyname}</span>
        <div className='flex flex-col items-center'>
          {image ? <FaRegCircle size='60' /> : <FaTimes size='60' />}
        </div>
      </div>
    </button>
  );
};

export default AllergyCard;
