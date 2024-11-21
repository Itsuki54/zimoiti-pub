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
  id: 'ownerId_dewamasumi',
  email: 'dewamasumi@example.com',
  name: '出羽真澄',
  password: 'password_dewamasumi',
  type: UserRole.OWNER,
  storeId: 'storeId_chikaraya',
  settingId: 'settingId_chikaraya',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleSetting: Setting = {
  id: 'settingId_chikaraya',
  recommned: false,
  ownerId: 'ownerId_dewamasumi',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleStore: Store = {
  id: 'storeId_chikaraya',
  name: 'ちからや',
  addressId: 'addressId_chikaraya',
  phone: '99-5227-1640',
  email: 'chikaraya@example.com',
  genre: '焼肉',
  url: 'https://www.chikaraya.co.jp',
  image: '/store/chikaraya.jpg',
  barrier: true,
  light: 2,
  lively: 1,
  location: '繁華街',
  language: '001110001',
  birthday: true,
  mobile: false,
  wifi: false,
  pet: false,
  takeout: true,
  smoking: true,
  stamp: false,
  point: false,
  invoice: true,
  kids: false,
  freeDrink: '水',
  otoshi: 400,
  serviceFee: 100,
  bring: 1,
  unlimited: 100,
  buffet: 2260,
  outlet: 13,
  createdAt: new Date(),
  updatedAt: new Date(),
  // paymentId: "paymentId_chikaraya",
  // parkingId: "parkingId_chikaraya",
  // timeId: "timeId_chikaraya",
};

export const sampleParking: Parking = {
  id: 'parkingId_chikaraya',
  inside: false,
  outside: true,
  capacity: 3,
  storeId: 'storeId_chikaraya',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleMenu1: Menu = {
  id: 'menuId_ushikarubi',
  name: '牛カルビ',
  genre: '肉',
  description: '日本産の高級肉です',
  readyTime: '9分',
  allergen: '1110001111110001001000001101',
  image: '/menu/niku.jpg',
  price: 560,
  storeId: 'storeId_chikaraya',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleMenu2: Menu = {
  id: 'menuId_bibinba',
  name: 'ビビンバ',
  genre: '米',
  description: '一つで2名分です',
  readyTime: '4分',
  allergen: '1111111010010101000010001111',
  image: '/menu/bibinnba.jpg',
  price: 760,
  storeId: 'storeId_chikaraya',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleAddress: Address = {
  id: 'addressId_chikaraya',
  street: 'さくら通り',
  city: '東京都',
  state: '台東区',
  zip: '227-1640',
  storeId: 'storeId_chikaraya',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleTime: Time = {
  id: 'timeId_chikaraya',
  day: '0111111',
  open: '9:00',
  close: '24:00',
  tag: '通常営業時間',
  storeId: 'storeId_chikaraya',
  parkingId: 'parkingId_chikaraya',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleServiceTime: ServiceTime = {
  id: 'serviceTimeId_chikaraya',
  day: '1100000',
  start: '6:00',
  end: '8:00',
  tag: 'モーニング',
  menuId: 'menuId_ushikarubi',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleReserve: Reserve = {
  id: 'reserveId_chikaraya',
  storeId: 'storeId_chikaraya',
  phone: '99-5227-1640',
  email: 'chikaraya@example.com',
  url: 'https://www.chikaraya.co.jp/reserve',
  timeId: 'timeId_chikaraya',
};

export const sampleCourse: Course = {
  id: 'courseId_puremiamukoosu',
  name: 'プレミアムコース',
  description: 'すき焼きも食べ放題です',
  genre: '肉',
  image: '/courseMenu/yakiniku.jpg',
  price: 1770,
  storeId: 'storeId_chikaraya',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleCourseMenu1: CourseMenu = {
  id: 'courseMenuId_reimen',
  name: '冷麺',
  description: '夏にぴったりです',
  allergen: '0010011111011011111111000010',
  image: '/courseMenu/reimenn.jpg',
  courseId: 'courseId_puremiamukoosu',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleCourseMenu2: CourseMenu = {
  id: 'courseMenuId_namurumoriawase',
  name: 'ナムル盛り合わせ',
  description: 'ゼンマイナムル、もやしナムル、ほうれん草ナムル、人参ナムルを含みます',
  allergen: '0010111001110110100010001101',
  image: '/courseMenu/namuru.jpg',
  courseId: 'courseId_puremiamukoosu',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleSeat: Seat = {
  id: 'seatId_chikaraya',
  madori: '',
  smoking: false,
  table: true,
  seats: 5,
  maximum: 25,
  storeId: 'storeId_chikaraya',
  toiletId: 'toiletId_chikaraya',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleToilet: Toilet = {
  id: 'toiletId_chikaraya',
  inside: false,
  outside: false,
  storeId: 'storeId_chikaraya',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleToiletType: ToiletType = {
  id: 'toiletTypeId_chikaraya',
  gender: '共用',
  wayou: false,
  washlet: true,
  toiletId: 'toiletId_chikaraya',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const samplePayment: Payment = {
  id: 'paymentId_chikaraya',
  card: '1110101',
  cash: false,
  QR: '000110',
  transit: false,
  IDPay: true,
  QuickPay: false,
  Nanaco: false,
  Edy: false,
  WAON: false,
  Pitapa: true,
  UNIONPAY: true,
  storeId: 'storeId_chikaraya',
  createdAt: new Date(),
  updatedAt: new Date(),
};
