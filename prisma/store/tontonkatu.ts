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
  id: 'ownerId_suzukitarou',
  email: 'suzukitarou@example.com',
  name: '鈴木 太郎',
  salt: 'salt9',
  password: 'password_suzukitarou',
  type: UserRole.OWNER,
  isSubscribed: false,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleSetting: Setting = {
  id: 'settingId_tontonkatsu',
  recommned: true,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleStore: Store = {
  id: 'storeId_tontonkatsu',
  name: 'トントンカツ',

  phone: '99-4018-5886',
  email: 'tontonkatsu@example.com',
  genre: '日本料理',
  furigana: 'ととんかつ',
  tags: 'トンカツ,ボリューミー',
  url: 'https://www.tontonkatsu.co.jp',
  image: '/store/tontonkatu.png',
  barrier: true,
  light: 1,
  lively: 1,
  location: 'オフィス街',
  language: '100101100',
  birthday: true,
  mobile: true,
  wifi: false,
  pet: true,
  takeout: true,
  smoking: false,
  stamp: false,
  point: false,
  invoice: true,
  kids: false,
  freeDrink: 'お茶',
  otoshi: 200,
  serviceFee: 200,
  bring: 2,
  unlimited: 200,
  buffet: 690,
  outlet: 21,
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleParking: Parking = {
  id: 'parkingId_tontonkatsu',
  inside: true,
  outside: true,
  capacity: 13,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleMenu1: Menu = {
  id: 'menuId_roosukatsuteishoku',
  name: 'ロースカツ定食',
  genre: '日本料理',
  description: 'ジューシーなロース肉をサクサクの衣で揚げた定食です',
  readyTime: '24分',
  allergen: '1000000110001010110000011000',
  image: '/menu/roosukatu.png',
  price: 880,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleMenu2: Menu = {
  id: 'menuId_hirekatsuteishoku',
  name: 'ヒレカツ定食',
  genre: '日本料理',
  description: '柔らかいヒレ肉を使用した上品な味わいの定食です',
  readyTime: '9分',
  allergen: '0111110111000100000010100110',
  image: '/app/public/menu/hirekatu.png',
  price: 640,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleAddress: Address = {
  id: 'addressId_tontonkatsu',
  street: 'さくら通り',
  city: '東京都',
  state: '豊島区',
  zip: '018-5886',

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleTime: Time = {
  id: 'timeId_tontonkatsu',
  day: '1011001',
  open: '7:00',
  close: '21:00',
  tag: '通常営業時間',

  // reserveId: 'reserveId_tontonkatsu',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleServiceTime: ServiceTime = {
  id: 'serviceTimeId_tontonkatsu',
  day: '0010001',
  start: '18:00',
  end: '21:00',
  tag: 'ディナー',

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleReserve: Reserve = {
  id: 'reserveId_tontonkatsu',

  phone: '99-4018-5886',
  email: 'tontonkatsu@example.com',
  url: 'https://www.tontonkatsu.co.jp/reserve',
};

export const sampleCourse: Course = {
  id: 'courseId_tontonkatsutokusenkoosu',
  name: 'トントンカツ特選コース',
  description: 'トンカツを中心に多彩な日本料理を楽しめるコースです',
  genre: '日本料理',
  image: '/courseMenu/tokusenroosukatu.png',
  price: 2800,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleCourseMenu1: CourseMenu = {
  id: 'courseMenuId_tokusenroosukatsu',
  name: '特選ロースカツ',
  description: '厳選されたロース肉を使用した贅沢なカツです',
  allergen: '0111110101100111001111010111',
  image: '/courseMenu/tokusenroosukatu.png',

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleCourseMenu2: CourseMenu = {
  id: 'courseMenuId_ebifurai',
  name: '海老フライ',
  description: 'ぷりぷりの海老をサクサクの衣で包んだフライです',
  allergen: '0010100001110100001000100000',
  image: '/courseMenu/ebihurai.png',

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleSeat: Seat = {
  id: 'seatId_tontonkatsu',
  madori: '店内',
  smoking: false,
  table: true,
  seats: 8,
  maximum: 17,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleToilet: Toilet = {
  id: 'toiletId_tontonkatsu',
  inside: true,
  outside: false,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleToiletType: ToiletType = {
  id: 'toiletTypeId_tontonkatsu',
  gender: '別',
  wayou: true,
  washlet: true,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const samplePayment: Payment = {
  id: 'paymentId_tontonkatsu',
  card: '0110110',
  cash: true,
  QR: '011010',
  transit: false,
  IDPay: false,
  QuickPay: true,
  Nanaco: true,
  Edy: true,
  WAON: false,
  Pitapa: false,
  UNIONPAY: true,

  createdAt: new Date(),
  updatedAt: new Date(),
};
