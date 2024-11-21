const languages = [
  '英語',
  'アラビア語',
  'ヒンディー語',
  '中国語',
  'フランス語',
  'インドネシア語',
  'スペイン語',
  'ドイツ語',
  '韓国語',
];

const languagesToBinary = (langs: string[]): string => {
  let binary = '';
  languages.forEach(value => {
    if (langs.includes(value)) {
      binary += '1';
    }
    else {
      binary += '0';
    }
  });
  return binary;
};

const binaryToLanguages = (binary: string): string[] => {
  const binaryArray = binary.split('');
  let langsArray: string[] = [];
  binaryArray.forEach((value, index) => {
    if (value === '1') {
      langsArray.push(languages[index]);
    }
  });
  return langsArray;
};

export { binaryToLanguages, languagesToBinary };
