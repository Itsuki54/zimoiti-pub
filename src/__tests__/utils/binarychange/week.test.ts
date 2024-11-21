import {
  binaryToDays,
  daysToBinary,
} from '@utils/binarychange/week';

describe('daysToBinary', () => {
  test('["月", "水", "金"] should return "0101010"', () => {
    const result = daysToBinary(['月', '水', '金']);
    expect(result).toBe('0101010');
  });

  test('["日", "木"] should return "1000100"', () => {
    const result = daysToBinary(['日', '木']);
    expect(result).toBe('1000100');
  });

  test('["月", "金","土"] should return "0100011"', () => {
    const result = daysToBinary(['月', '金', '土']);
    expect(result).toBe('0100011');
  });

  test('[] should return "0000000"', () => {
    const result = daysToBinary([]);
    expect(result).toBe('0000000');
  });
});

describe('binaryToDays', () => {
  test('"0101010" should return ["月", "水", "金"]', () => {
    const result = binaryToDays('0101010');
    expect(result).toEqual(['月', '水', '金']);
  });

  test('"1000100" should return ["日", "木"]', () => {
    const result = binaryToDays('1000100');
    expect(result).toEqual(['日', '木']);
  });

  test('"0100110" should return ["月", "木","金"]', () => {
    const result = binaryToDays('0100110');
    expect(result).toEqual(['月', '木', '金']);
  });

  test('"0000000" should return []', () => {
    const result = binaryToDays('0000000');
    expect(result).toEqual([]);
  });
});
