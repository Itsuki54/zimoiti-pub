import { daysToBinary } from '@/utils/binarychange/week';
import {
  FC,
  useState,
} from 'react';
import { twMerge } from 'tailwind-merge';

interface DayButtonProps {
  day: string;
  isSelected: boolean;
  onClick: (day: string) => void;
}

const DayButton: FC<DayButtonProps> = ({ day, isSelected, onClick }) => {
  return (
    <button
      onClick={() => onClick(day)}
      className={`w-8 h-8 m-1 rounded-full ${isSelected ? 'bg-blue-500 text-white' : 'bg-white text-black'}`}
    >
      {day}
    </button>
  );
};

const DaysOfWeekButtons = ({
  defaultValue = [],
  setValue,
  className,
}: {
  defaultValue?: string[];
  setValue: (value: string) => void;
  className?: string;
}) => {
  const [selectedDays, setSelectedDays] = useState<string[]>(defaultValue);
  const daysOfWeek = [
    {
      day: '日',
      value: 0,
    },
    {
      day: '月',
      value: 2,
    },
    {
      day: '火',
      value: 4,
    },
    {
      day: '水',
      value: 8,
    },
    {
      day: '木',
      value: 16,
    },
    {
      day: '金',
      value: 32,
    },
    {
      day: '土',
      value: 64,
    },
  ];

  const handleDayClick = (day: string) => {
    setSelectedDays(prevSelectedDays =>
      prevSelectedDays.includes(day)
        ? prevSelectedDays.filter(d => d !== day)
        : [...prevSelectedDays, day]
    );
    setValue(
      daysToBinary(
        selectedDays.includes(day)
          ? selectedDays.filter(d => d !== day)
          : [...selectedDays, day],
      ),
    );
  };

  return (
    <div className={twMerge('flex flex-wrap', className)}>
      {daysOfWeek.map(({ day }) => (
        <DayButton
          key={day}
          day={day}
          isSelected={selectedDays.includes(day)}
          onClick={() => handleDayClick(day)}
        />
      ))}
    </div>
  );
};

export default DaysOfWeekButtons;
