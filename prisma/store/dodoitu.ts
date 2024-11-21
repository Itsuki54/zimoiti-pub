import {
  Address,
  Course,
  CourseMenu,
  Menu,
  Parking,
  Payment,
  Reserve,
  Seat,
  ServiceTime,
  Setting,
  Store,
  Time,
  Toilet,
  ToiletType,
  User,
  UserRole,
} from '@prisma/client';

export const sampleUser: User = {
  id: 'ownerId_hansushumitto',
  email: 'hansushumitto@example.com',
  name: 'ハンスシュミット',
  password: 'password_hansushumitto',
  salt: 'salt9',
  type: UserRole.OWNER,
  isSubscribed: false,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleSetting: Setting = {
  id: 'settingId_dodoitsu',
  recommned: true,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleStore: Store = {
  id: 'storeId_dodoitsu',
  name: 'ドドいつ',

  phone: '99-2176-9072',
  email: 'dodoitsu@example.com',
  genre: 'ドイツ料理',
  furigana: 'どどいつ',
  tags: 'ドイツ,住宅街',
  url: 'https://www.dodoitsu.co.jp',
  image: '/store/dodoitu.png',
  barrier: true,
  light: 2,
  lively: 1,
  location: '住宅街',
  language: '101001101',
  birthday: false,
  mobile: true,
  wifi: false,
  pet: false,
  takeout: true,
  smoking: true,
  stamp: true,
  point: true,
  invoice: false,
  kids: true,
  freeDrink: 'お茶',
  otoshi: 200,
  serviceFee: 300,
  bring: 3,
  unlimited: 200,
  buffet: 640,
  outlet: 16,
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleParking: Parking = {
  id: 'parkingId_dodoitsu',
  inside: true,
  outside: false,
  capacity: 8,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleMenu1: Menu = {
  id: 'menuId_shunittsueru',
  name: 'シュニッツェル',
  genre: 'ドイツ料理',
  description: 'サクサクの衣で包んだ伝統的なドイツのカツレツです',
  readyTime: '15分',
  allergen: '1100010010111100001101110101',
  image: '/menu/syuneturu.png',
  price: 460,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleMenu2: Menu = {
  id: 'menuId_aisubain',
  name: 'アイスバイン',
  genre: 'ドイツ料理',
  description: '柔らかく煮込んだ豚すね肉の料理です',
  readyTime: '3分',
  allergen: '0111011001000111010011010010',
  image: '/menu/aisubain.png',
  price: 700,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleAddress: Address = {
  id: 'addressId_dodoitsu',
  street: 'さくら通り',
  city: '東京都',
  state: '千代田区',
  zip: '176-9072',

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleTime: Time = {
  id: 'timeId_dodoitsu',
  day: '0000000',
  open: '10:00',
  close: '20:00',
  tag: '通常営業時間',

  // reserveId: 'reserveId_dodoitsu',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleServiceTime: ServiceTime = {
  id: 'serviceTimeId_dodoitsu',
  day: '1000001',
  start: '6:00',
  end: '8:00',
  tag: 'モーニング',

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleReserve: Reserve = {
  id: 'reserveId_dodoitsu',

  phone: '99-2176-9072',
  email: 'dodoitsu@example.com',
  url: 'https://www.dodoitsu.co.jp/reserve',
};

export const sampleCourse: Course = {
  id: 'courseId_doitsuryourifurukoosu',
  name: 'ドイツ料理フルコース',
  description: '本場ドイツの味を楽しめる贅沢なフルコースです',
  genre: 'ドイツ料理',
  image: '/courseMenu/dodoitucourse.png',
  price: 2540,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleCourseMenu1: CourseMenu = {
  id: 'courseMenuId_buraatovurusuto',
  name: 'ブラートヴルスト',
  description: 'ジューシーな焼きソーセージです',
  allergen: '0101110000100001101000111000',
  image: '/courseMenu/braatouruto.png',

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleCourseMenu2: CourseMenu = {
  id: 'courseMenuId_zawaakurauto',
  name: 'ザワークラウト',
  description: 'さっぱりとしたキャベツの酢漬けです',
  allergen: '0110100111111111100100111010',
  image: '/courseMenu/zawaakurauto.png',

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleSeat: Seat = {
  id: 'seatId_dodoitsu',
  madori: '',
  smoking: false,
  table: false,
  seats: 14,
  maximum: 22,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleToilet: Toilet = {
  id: 'toiletId_dodoitsu',
  inside: true,
  outside: true,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleToiletType: ToiletType = {
  id: 'toiletTypeId_dodoitsu',
  gender: '別',
  wayou: false,
  washlet: true,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const samplePayment: Payment = {
  id: 'paymentId_dodoitsu',
  card: '0101111',
  cash: true,
  QR: '010000',
  transit: false,
  IDPay: true,
  QuickPay: false,
  Nanaco: false,
  Edy: false,
  WAON: true,
  Pitapa: false,
  UNIONPAY: true,

  createdAt: new Date(),
  updatedAt: new Date(),
};
