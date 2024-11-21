import {
  allergiesToBinary,
  binaryToAllergies,
} from '@utils/binarychange/allergies';

describe('binaryToAllergies', () => {
  test('"1010100000000000000000000000" should return ["卵", "小麦", "カニ"]', () => {
    const result = binaryToAllergies('1010100000000000000000000000');
    expect(result).toEqual(['卵', '小麦', 'カニ']);
  });

  test('"0000100000000011000000000000" should return ["カニ","大豆","松茸"]', () => {
    const result = binaryToAllergies('0000100000000011000000000000');
    expect(result).toEqual(['カニ', '大豆', '松茸']);
  });

  test('"0101010101010101010101010101" should return alternating allergies', () => {
    const result = binaryToAllergies('0101010101010101010101010101');
    expect(result).toEqual([
      'アーモンド',
      'エビ',
      'くるみ',
      'そば',
      '牛乳',
      '鶏肉',
      'さば',
      '松茸',
      '桃',
      'りんご',
      'あわび',
      'カシューナッツ',
      'いくら',
      'オレンジ',
    ]);
  });

  test('"0000000000000100000000000001" should return ["さば","オレンジ"]', () => {
    const result = binaryToAllergies('0000000000000100000000000001');
    expect(result).toEqual(['さば', 'オレンジ']);
  });

  test('"0100000000000000000000000000" should return ["アーモンド"]', () => {
    const result = binaryToAllergies('0100000000000000000000000000');
    expect(result).toEqual(['アーモンド']);
  });

  test('"0000000000000000000000000000" should return empty array', () => {
    const result = binaryToAllergies('0000000000000000000000000000');
    expect(result).toEqual([]);
  });

  test('"1111111111111111111111111111" should return all array', () => {
    const result = binaryToAllergies('1111111111111111111111111111');
    expect(result).toEqual(['卵', 'アーモンド', '小麦', 'エビ', 'カニ', 'くるみ', '牛乳', 'そば', '落花生', '牛乳', '豚肉', '鶏肉', '鮭', 'さば', '大豆', '松茸', 'キウイ', '桃', 'バナナ', 'りんご', 'ごま', 'あわび', 'ゼラチン', 'カシューナッツ', '山芋', 'いくら', 'イカ', 'オレンジ']);
  });
});

describe('allergiesToBinary', () => {
  test('[] should return binary "00000000000000000000000000"', () => {
    const result = allergiesToBinary([]);
    expect(result).toBe('0000000000000000000000000000');
  });

  test('["卵","いくら","バナナ"] should return binary "10000000000000001000000100"', () => {
    const result = allergiesToBinary(['卵', 'いくら', 'バナナ']);
    expect(result).toBe('1000000000000000001000000100');
  });

  test('["卵","小麦"] should return binary "10100000000000000000000000"', () => {
    const result = allergiesToBinary(['卵', '小麦']);
    expect(result).toBe('1010000000000000000000000000');
  });

  test('["卵","アーモンド","小麦","エビ","カニ","くるみ","牛乳","そば","落花生","牛乳","豚肉","鶏肉","鮭","さば","大豆","松茸","キウイ","桃","バナナ","りんご","ごま","あわび","ゼラチン","カシューナッツ","山芋","いくら","イカ","オレンジ"] should return binary "1111111111111111111111111111"', () => {
    const result = allergiesToBinary(['卵', 'アーモンド', '小麦', 'エビ', 'カニ', 'くるみ', '牛乳', 'そば', '落花生', '牛乳', '豚肉', '鶏肉', '鮭', 'さば', '大豆', '松茸', 'キウイ', '桃', 'バナナ', 'りんご', 'ごま', 'あわび', 'ゼラチン', 'カシューナッツ', '山芋', 'いくら', 'イカ', 'オレンジ']);
    expect(result).toBe('1111111111111111111111111111');
  });

  test('["アーモンド","エビ","くるみ","そば","牛乳","鶏肉","さば","松茸","桃","りんご","あわび","カシューナッツ","いくら","オレンジ"] should return binary "0101011101010101010101010101"', () => {
    const result = allergiesToBinary(['アーモンド', 'エビ', 'くるみ', 'そば', '牛乳', '鶏肉', 'さば', '松茸', '桃', 'りんご', 'あわび', 'カシューナッツ', 'いくら', 'オレンジ']);
    expect(result).toBe('0101011101010101010101010101');
  });
});
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
