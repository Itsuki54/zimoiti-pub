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
  id: 'ownerId_tanakajirou',
  email: 'tanakajirou@example.com',
  name: '田中 次郎',
  password: 'password_tanakajirou',
  salt: 'salt9',
  type: UserRole.OWNER,
  isSubscribed: false,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleSetting: Setting = {
  id: 'settingId_sushizushi',
  recommned: true,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleStore: Store = {
  id: 'storeId_sushizushi',
  name: 'すしずし',

  phone: '99-1671-4056',
  email: 'sushizushi@example.com',
  genre: '日本料理',
  furigana: 'すしずし',
  tags: '寿司,いくら',
  url: 'https://www.sushizushi.co.jp',
  image: '/store/sushizushi.png',
  barrier: true,
  light: 2,
  lively: 1,
  location: 'オフィス街',
  language: '100010100',
  birthday: false,
  mobile: false,
  wifi: false,
  pet: true,
  takeout: false,
  smoking: false,
  stamp: false,
  point: false,
  invoice: true,
  kids: false,
  freeDrink: '水',
  otoshi: 400,
  serviceFee: 100,
  bring: 4,
  unlimited: 300,
  buffet: 990,
  outlet: 7,
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleParking: Parking = {
  id: 'parkingId_sushizushi',
  inside: false,
  outside: true,
  capacity: 11,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleMenu1: Menu = {
  id: 'menuId_nigirisushimoriawase',
  name: '握り寿司盛り合わせ',
  genre: '日本料理',
  description: '新鮮なネタを使用した握り寿司の盛り合わせです',
  readyTime: '15分',
  allergen: '0000000100001011010011111011',
  image: '/menu/nigirisushi.png',
  price: 470,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleMenu2: Menu = {
  id: 'menuId_makisushisetto',
  name: '巻き寿司セット',
  genre: '日本料理',
  description: '人気の具材を巻いた巻き寿司のセットです',
  readyTime: '18分',
  allergen: '1000111101101010100011101011',
  image: '/menu/makisushi.png',
  price: 730,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleAddress: Address = {
  id: 'addressId_sushizushi',
  street: 'さくら通り',
  city: '東京都',
  state: '荒川区',
  zip: '671-4056',

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleTime: Time = {
  id: 'timeId_sushizushi',
  day: '0011000',
  open: '7:00',
  close: '23:00',
  tag: '通常営業時間',

  // reserveId: 'reserveId_sushizushi',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleServiceTime: ServiceTime = {
  id: 'serviceTimeId_sushizushi',
  day: '0110010',
  start: '11:00',
  end: '14:00',
  tag: 'ランチ',

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleReserve: Reserve = {
  id: 'reserveId_sushizushi',

  phone: '99-1671-4056',
  email: 'sushizushi@example.com',
  url: 'https://www.sushizushi.co.jp/reserve',
};

export const sampleCourse: Course = {
  id: 'courseId_kisetsunosushikoosu',
  name: '季節の寿司コース',
  description: '季節の食材をふんだんに使った寿司のフルコースです',
  genre: '日本料理',
  image: '/courseMenu/sushizushicourse.png',
  price: 1260,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleCourseMenu1: CourseMenu = {
  id: 'courseMenuId_tokusennigirisushi',
  name: '特選握り寿司',
  description: 'その日のおすすめネタを使った特選握り寿司です',
  allergen: '0110101111001001100110010110',
  image: '/courseMenu/tokusennigiri.png',

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleCourseMenu2: CourseMenu = {
  id: 'courseMenuId_junnosashimimoriawase',
  name: '旬の刺身盛り合わせ',
  description: '新鮮な魚を使った刺身の盛り合わせです',
  allergen: '1111000011111001000001011111',
  image: '/courseMenu/shunnosashimi.png',

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleSeat: Seat = {
  id: 'seatId_sushizushi',
  madori: '室内',
  smoking: true,
  table: true,
  seats: 6,
  maximum: 26,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleToilet: Toilet = {
  id: 'toiletId_sushizushi',
  inside: true,
  outside: true,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleToiletType: ToiletType = {
  id: 'toiletTypeId_sushizushi',
  gender: '別',
  wayou: true,
  washlet: true,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const samplePayment: Payment = {
  id: 'paymentId_sushizushi',
  card: '0101100',
  cash: true,
  QR: '111001',
  transit: true,
  IDPay: false,
  QuickPay: false,
  Nanaco: true,
  Edy: false,
  WAON: true,
  Pitapa: false,
  UNIONPAY: false,

  createdAt: new Date(),
  updatedAt: new Date(),
};
