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
  id: 'ownerId_yamamotoichirou',
  email: 'yamamotoichirou@example.com',
  name: '山本 一郎',
  password: 'password_yamamotoichirou',
  salt: 'salt9',
  type: UserRole.OWNER,
  isSubscribed: false,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleSetting: Setting = {
  id: 'settingId_okonomi',
  recommned: true,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleStore: Store = {
  id: 'storeId_okonomi',
  name: 'おこのみ',

  phone: '99-0599-9996',
  email: 'okonomi@example.com',
  genre: 'お好み焼き',
  furigana: 'おこのみ',
  tags: 'ソース,広島風',
  url: 'https://www.okonomi.co.jp',
  image: '/store/okonomi.png',
  barrier: true,
  light: 3,
  lively: 1,
  location: 'オフィス街',
  language: '101011010',
  birthday: true,
  mobile: true,
  wifi: true,
  pet: true,
  takeout: true,
  smoking: true,
  stamp: false,
  point: false,
  invoice: false,
  kids: false,
  freeDrink: '水',
  otoshi: 400,
  serviceFee: 300,
  bring: 1,
  unlimited: 200,
  buffet: 1220,
  outlet: 12,
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleParking: Parking = {
  id: 'parkingId_okonomi',
  inside: false,
  outside: true,
  capacity: 11,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleMenu1: Menu = {
  id: 'menuId_butatamaokonomiyaki',
  name: '豚玉お好み焼き',
  genre: '日本料理',
  description: '豚肉をたっぷり使った定番の豚玉お好み焼きです',
  readyTime: '14分',
  allergen: '0111001100111100001101110111',
  image: '/menu/butatama.png',
  price: 370,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleMenu2: Menu = {
  id: 'menuId_kaisenokonomiyaki',
  name: '海鮮お好み焼き',
  genre: '日本料理',
  description: '新鮮な海の幸をふんだんに使用したお好み焼きです',
  readyTime: '15分',
  allergen: '0010110010000010000010100001',
  image: '/menu/kaisenokonomi.png',
  price: 500,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleAddress: Address = {
  id: 'addressId_okonomi',
  street: 'さくら通り',
  city: '東京都',
  state: '葛飾区',
  zip: '599-9996',

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleTime: Time = {
  id: 'timeId_okonomi',
  day: '0101111',
  open: '8:00',
  close: '19:00',
  tag: '通常営業時間',

  // reserveId: 'reserveId_okonomi',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleServiceTime: ServiceTime = {
  id: 'serviceTimeId_okonomi',
  day: '0000001',
  start: '6:00',
  end: '8:00',
  tag: 'モーニング',

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleReserve: Reserve = {
  id: 'reserveId_okonomi',

  phone: '99-0599-9996',
  email: 'okonomi@example.com',
  url: 'https://www.okonomi.co.jp/reserve',
};

export const sampleCourse: Course = {
  id: 'courseId_okonomisupesharukoosu',
  name: 'おこのみスペシャルコース',
  description: '多彩なお好み焼きを楽しめるスペシャルコースです',
  genre: '日本料理',
  image: '/courseMenu/okonoomicourse.png',
  price: 1280,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleCourseMenu1: CourseMenu = {
  id: 'courseMenuId_mikkusuokonomiyaki',
  name: 'ミックスお好み焼き',
  description: '豚肉、エビ、イカなどをミックスしたボリューム満点のお好み焼きです',
  allergen: '0101011011001110011110110110',
  image: '/courseMenu/mikkusu.png',

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleCourseMenu2: CourseMenu = {
  id: 'courseMenuId_hiroshimakazeokonomiyaki',
  name: '広島風お好み焼き',
  description: 'そば入りでボリュームたっぷりの広島風お好み焼きです',
  allergen: '1101101000100010110111000110',
  image: '/courseMenu/hitosimahuu.png',

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleSeat: Seat = {
  id: 'seatId_okonomi',
  madori: '',
  smoking: false,
  table: false,
  seats: 12,
  maximum: 16,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleToilet: Toilet = {
  id: 'toiletId_okonomi',
  inside: true,
  outside: true,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleToiletType: ToiletType = {
  id: 'toiletTypeId_okonomi',
  gender: '共用',
  wayou: false,
  washlet: false,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const samplePayment: Payment = {
  id: 'paymentId_okonomi',
  card: '1010100',
  cash: false,
  QR: '001001',
  transit: true,
  IDPay: false,
  QuickPay: false,
  Nanaco: false,
  Edy: false,
  WAON: true,
  Pitapa: false,
  UNIONPAY: false,

  createdAt: new Date(),
  updatedAt: new Date(),
};
