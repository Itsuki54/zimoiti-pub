const allergies = [
  '卵',
  'アーモンド',
  '小麦',
  'エビ',
  'カニ',
  'くるみ',
  '牛乳',
  'そば',
  '落花生',
  '牛乳',
  '豚肉',
  '鶏肉',
  '鮭',
  'さば',
  '大豆',
  '松茸',
  'キウイ',
  '桃',
  'バナナ',
  'りんご',
  'ごま',
  'あわび',
  'ゼラチン',
  'カシューナッツ',
  '山芋',
  'いくら',
  'イカ',
  'オレンジ',
];

export const allergiesToBinary = (allergyList: string[]): string => {
  let binary = '';
  allergies.forEach(value => {
    if (allergyList.includes(value)) {
      binary += '1';
    }
    else {
      binary += '0';
    }
  });
  return binary;
};

export const binaryToAllergies = (binary: string): string[] => {
  const binaryArray = binary.split('');
  let allergyArray: string[] = [];
  binaryArray.forEach((value, index) => {
    if (value === '1') {
      allergyArray.push(allergies[index]);
    }
  });
  return allergyArray;
};
