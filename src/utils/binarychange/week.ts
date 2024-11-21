const daysOfWeek = ['日', '月', '火', '水', '木', '金', '土'];

const daysToBinary = (daysList: string[]): string => {
  let binary = '';
  daysOfWeek.forEach(value => {
    if (daysList.includes(value)) {
      binary += '1';
    }
    else {
      binary += '0';
    }
  });
  return binary;
};

const binaryToDays = (binary: string): string[] => {
  const binaryArray = binary.split('');
  let daysArray: string[] = [];
  binaryArray.forEach((value, index) => {
    if (value === '1') {
      daysArray.push(daysOfWeek[index]);
    }
  });
  return daysArray;
};

export { binaryToDays, daysToBinary };
