import {
  binaryToCard,
  binaryToQRPayments,
  cardToBinary,
  qrPaymentsToBinary,
} from '@utils/binarychange/payments';

describe('binaryToQRPayments', () => {
  test('"010101" should return ["PayPay","d払い","auPAY"]', () => {
    const result = binaryToQRPayments('0101010');
    expect(result).toEqual(['PayPay', 'd払い', 'auPAY']);
  });
  test('"100010" should return ["LINEPay", "メルペイ"]', () => {
    const result = binaryToQRPayments('100010');
    expect(result).toEqual(['LINEPay', 'メルペイ']);
  });

  test('"000000" should return []', () => {
    const result = binaryToQRPayments('000000');
    expect(result).toEqual([]);
  });

  test('"111111" should return all array', () => {
    const result = binaryToQRPayments('111111');
    expect(result).toEqual(['LINEPay', 'PayPay', '楽天ペイ', 'd払い', 'メルペイ', 'auPAY']);
  });
});

describe('binaryToCard', () => {
  test('"0101010" should return ["Mastercard", "American Express", "Discover"]', () => {
    const result = binaryToCard('0101010');
    expect(result).toEqual(['Mastercard', 'American Express', 'Discover']);
  });

  test('"1000100" should return ["VISA", "Diners Club"]', () => {
    const result = binaryToCard('1000100');
    expect(result).toEqual(['VISA', 'Diners Club']);
  });

  test('"0000000" should return an empty array', () => {
    const result = binaryToCard('0000000');
    expect(result).toEqual([]);
  });

  test('"1000001" should return ["VISA", "UnionPay"]', () => {
    const result = binaryToCard('1000001');
    expect(result).toEqual(['VISA', 'UnionPay']);
  });
});

describe('qrPaymentsToBinary', () => {
  test('["LINEPay","PayPay"] should return "110000"', () => {
    const result = qrPaymentsToBinary(['LINEPay', 'PayPay']);
    expect(result).toBe('110000');
  });
  test('["PayPay", "メルペイ"] should return "010010"', () => {
    const result = qrPaymentsToBinary(['PayPay', 'メルペイ']);
    expect(result).toBe('010010');
  });

  test('["LINEPay", "楽天ペイ", "auPAY"] should return "101001"', () => {
    const result = qrPaymentsToBinary(['LINEPay', '楽天ペイ', 'auPAY']);
    expect(result).toBe('101001');
  });

  test('["d払い"] should return "000100"', () => {
    const result = qrPaymentsToBinary(['d払い']);
    expect(result).toBe('000100');
  });
});

describe('CardToBinary', () => {
  test('["VISA", "UnionPay"] should return "1000001"', () => {
    const result = cardToBinary(['VISA', 'UnionPay']);
    expect(result).toBe('1000001');
  });
  test('["VISA", "Mastercard"] should return "1100000"', () => {
    const result = cardToBinary(['VISA', 'Mastercard']);
    expect(result).toBe('1100000');
  });

  test('["JCB", "American Express", "UnionPay"] should return "0010101"', () => {
    const result = cardToBinary(['JCB', 'American Express', 'UnionPay']);
    expect(result).toBe('0011001');
  });

  test('["Diners Club", "Discover"] should return "0000110"', () => {
    const result = cardToBinary(['Diners Club', 'Discover']);
    expect(result).toBe('0000110');
  });
});
