import {
  binaryToLanguages,
  languagesToBinary,
} from '@utils/binarychange/languages';

describe('languagesToBinary', () => {
  test('["英語","アラビア語","ヒンディー語","中国語","フランス語","インドネシア語","スペイン語","ドイツ語","韓国語"] should return binary "111111111"', () => {
    const result = languagesToBinary(['英語', 'アラビア語', 'ヒンディー語', '中国語', 'フランス語', 'インドネシア語', 'スペイン語', 'ドイツ語', '韓国語']);
    expect(result).toBe('111111111');
  });

  test('["中国語","フランス語","インドネシア語","スペイン語","ドイツ語","韓国語"] should return binary "000111111"', () => {
    const result = languagesToBinary(['中国語', 'フランス語', 'インドネシア語', 'スペイン語', 'ドイツ語', '韓国語']);
    expect(result).toBe('000111111');
  });

  test('["英語","中国語"] should return binary "100100000"', () => {
    const result = languagesToBinary(['英語', '中国語']);
    expect(result).toBe('100100000');
  });

  test('[] array should return "000000000"', () => {
    const result = languagesToBinary([]);
    expect(result).toBe('000000000');
  });
});

describe('binaryToLanguages', () => {
  test('"011111101" should return ["アラビア語","ヒンディー語","中国語","フランス語","インドネシア語","スペイン語","韓国語"]', () => {
    const result = binaryToLanguages('011111101');
    expect(result).toEqual(['アラビア語', 'ヒンディー語', '中国語', 'フランス語', 'インドネシア語', 'スペイン語', '韓国語']);
  });

  test('"111001110" should return ["英語","アラビア語","ヒンディー語","インドネシア語","スペイン語","ドイツ語"]', () => {
    const result = binaryToLanguages('111001110');
    expect(result).toEqual(['英語', 'アラビア語', 'ヒンディー語', 'インドネシア語', 'スペイン語', 'ドイツ語']);
  });

  test('"111111111" should return ["英語","アラビア語","ヒンディー語","中国語","フランス語","インドネシア語","スペイン語","ドイツ語","韓国語"]', () => {
    const result = binaryToLanguages('111111111');
    expect(result).toEqual(['英語', 'アラビア語', 'ヒンディー語', '中国語', 'フランス語', 'インドネシア語', 'スペイン語', 'ドイツ語', '韓国語']);
  });

  test('"000000000" should return []', () => {
    const result = binaryToLanguages('000000000');
    expect(result).toEqual([]);
  });
});
