const qrPayments = [
  'LINEPay',
  'PayPay',
  '楽天ペイ',
  'd払い',
  'メルペイ',
  'auPAY',
];

const cards = [
  'VISA',
  'Mastercard',
  'JCB',
  'American Express',
  'Diners Club',
  'Discover',
  'UnionPay',
];

const binaryToQRPayments = (binary: string): string[] => {
  const binaryArray = binary.split('');
  let qrPaymentsArray: string[] = [];
  binaryArray.forEach((value, index) => {
    if (value === '1') {
      qrPaymentsArray.push(qrPayments[index]);
    }
  });
  return qrPaymentsArray;
};

const binaryToCard = (binary: string) => {
  const binaryArray = binary.split('');
  let cardArray: string[] = [];
  binaryArray.forEach((value, index) => {
    if (value === '1') {
      cardArray.push(cards[index]);
    }
  });
  return cardArray;
};

const qrPaymentsToBinary = (qr: string[]) => {
  let binary = '';
  qrPayments.forEach(value => {
    if (qr.includes(value)) {
      binary += '1';
    }
    else {
      binary += '0';
    }
  });
  return binary;
};

const cardToBinary = (card: string[]) => {
  let binary = '';
  cards.forEach(value => {
    if (card.includes(value)) {
      binary += '1';
    }
    else {
      binary += '0';
    }
  });
  return binary;
};

export { binaryToCard, binaryToQRPayments, cardToBinary, qrPaymentsToBinary };
