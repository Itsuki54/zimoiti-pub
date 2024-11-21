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
  id: 'ownerId_agasatakeshi',
  email: 'agasatakeshi@example.com',
  name: '阿笠 健',
  password: 'password_agasatakeshi',
  salt: 'salt9',
  type: UserRole.OWNER,
  isSubscribed: false,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleSetting: Setting = {
  id: 'settingId_chuukaya',
  recommned: true,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleStore: Store = {
  id: 'storeId_chuukaya',
  name: '中華屋',
  furigana: 'ちゅうかや',

  phone: '99-1848-3183',
  email: 'chuukaya@example.com',
  genre: '中華料理',
  tags: '中華料理、エビチリ',
  url: 'https://www.chuukaya.co.jp',
  image: '/store/tyuukaya.png',
  barrier: true,
  light: 2,
  lively: 1,
  location: 'オフィス街',
  language: '011011010',
  birthday: false,
  mobile: true,
  wifi: false,
  pet: true,
  takeout: false,
  smoking: true,
  stamp: false,
  point: true,
  invoice: false,
  kids: false,
  freeDrink: '水',
  otoshi: 300,
  serviceFee: 200,
  bring: 3,
  unlimited: 100,
  buffet: 710,
  outlet: 13,
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleParking: Parking = {
  id: 'parkingId_chuukaya',
  inside: true,
  outside: false,
  capacity: 14,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleMenu1: Menu = {
  id: 'menuId_maaboudoufu',
  name: '麻婆豆腐',
  genre: '中華料理',
  description: '四川風のピリ辛麻婆豆腐です',
  readyTime: '17分',
  allergen: '0100001010110101001100111010',
  image: '/menu/maaboudouhu.png',
  price: 670,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleMenu2: Menu = {
  id: 'menuId_ebichiri',
  name: 'エビチリ',
  genre: '中華料理',
  description: 'プリプリのエビを使った甘辛いエビチリです',
  readyTime: '22分',
  allergen: '0001111101101100010111011001',
  image: '/menu/ebitiri.png',
  price: 890,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleAddress: Address = {
  id: 'addressId_chuukaya',
  street: 'いちょう通り',
  city: '東京都',
  state: '港区',
  zip: '848-3183',

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleTime: Time = {
  id: 'timeId_chuukaya',
  day: '0000111',
  open: '9:00',
  close: '20:00',
  tag: '通常営業時間',

  // reserveId: 'reserveId_chuukaya',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleServiceTime: ServiceTime = {
  id: 'serviceTimeId_chuukaya',
  day: '1000000',
  start: '6:00',
  end: '8:00',
  tag: 'モーニング',

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleReserve: Reserve = {
  id: 'reserveId_chuukaya',

  phone: '99-1848-3183',
  email: 'chuukaya@example.com',
  url: 'https://www.chuukaya.co.jp/reserve',
};

export const sampleCourse: Course = {
  id: 'courseId_goukachuukakoosu',
  name: '豪華中華コース',
  description: '多彩な中華料理を楽しめるフルコースです',
  genre: '中華料理',
  image: '/courseMenu/tyuukayacourse.png',
  price: 830,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleCourseMenu1: CourseMenu = {
  id: 'courseMenuId_pekindakku',
  name: '北京ダック',
  description: '外はパリッと、中はジューシーな北京ダックです',
  allergen: '0011000100110100001010010011',
  image: '/courseMenu/pekindakku.png',

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleCourseMenu2: CourseMenu = {
  id: 'courseMenuId_fukahiresuupu',
  name: 'フカヒレスープ',
  description: '濃厚で贅沢なフカヒレスープです',
  allergen: '1100000110001011100011010011',
  image: '/courseMenu/hukahiresuupu.png',

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleSeat: Seat = {
  id: 'seatId_chuukaya',
  madori: '室内',
  smoking: true,
  table: true,
  seats: 11,
  maximum: 21,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleToilet: Toilet = {
  id: 'toiletId_chuukaya',
  inside: true,
  outside: true,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleToiletType: ToiletType = {
  id: 'toiletTypeId_chuukaya',
  gender: '別',
  wayou: false,
  washlet: true,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const samplePayment: Payment = {
  id: 'paymentId_chuukaya',
  card: '1110110',
  cash: true,
  QR: '010110',
  transit: false,
  IDPay: true,
  QuickPay: false,
  Nanaco: true,
  Edy: true,
  WAON: true,
  Pitapa: true,
  UNIONPAY: false,

  createdAt: new Date(),
  updatedAt: new Date(),
};
