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
  id: 'ownerId_jan・pieeru',
  email: 'janpieeru@example.com',
  name: 'ジャン・ピエール',
  password: 'password_jan・pieeru',
  salt: 'salt9',
  type: UserRole.OWNER,
  isSubscribed: false,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleSetting: Setting = {
  id: 'settingId_fuuransu',
  recommned: true,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleStore: Store = {
  id: 'storeId_fuuransu',
  name: 'フーランス',

  phone: '99-0616-2429',
  email: 'fuuransu@example.com',
  genre: 'フランス料理',
  furigana: 'ふーらんす',
  tags: 'フランス,住宅街',
  url: 'https://www.fuuransu.co.jp',
  image: '/store/fuuransuten.png',
  barrier: false,
  light: 3,
  lively: 2,
  location: '住宅街',
  language: '111011001',
  birthday: true,
  mobile: false,
  wifi: false,
  pet: true,
  takeout: true,
  smoking: true,
  stamp: false,
  point: false,
  invoice: false,
  kids: false,
  freeDrink: 'お茶',
  otoshi: 200,
  serviceFee: 300,
  bring: 1,
  unlimited: 100,
  buffet: 1460,
  outlet: 2,
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleParking: Parking = {
  id: 'parkingId_fuuransu',
  inside: true,
  outside: true,
  capacity: 6,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleMenu1: Menu = {
  id: 'menuId_foaguranosotee',
  name: 'フォアグラのソテー',
  genre: 'フランス料理',
  description: '高級食材フォアグラを使用した贅沢な一品です',
  readyTime: '15分',
  allergen: '0100101010000101101101010110',
  image: '/menu/foaguranosotei.png',
  price: 380,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleMenu2: Menu = {
  id: 'menuId_onionguratansuupu',
  name: 'オニオングラタンスープ',
  genre: 'フランス料理',
  description: '香ばしいチーズと玉ねぎの甘みが広がるスープです',
  readyTime: '11分',
  allergen: '0101110110100110001110001111',
  image: '/menu/onionsuupu.png',
  price: 360,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleAddress: Address = {
  id: 'addressId_fuuransu',
  street: 'もみじ通り',
  city: '東京都',
  state: '台東区',
  zip: '616-2429',

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleTime: Time = {
  id: 'timeId_fuuransu',
  day: '0111000',
  open: '6:00',
  close: '21:00',
  tag: '通常営業時間',

  // reserveId: 'reserveId_fuuransu',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleServiceTime: ServiceTime = {
  id: 'serviceTimeId_fuuransu',
  day: '0100010',
  start: '6:00',
  end: '8:00',
  tag: 'モーニング',

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleReserve: Reserve = {
  id: 'reserveId_fuuransu',

  phone: '99-0616-2429',
  email: 'fuuransu@example.com',
  url: 'https://www.fuuransu.co.jp/reserve',
};

export const sampleCourse: Course = {
  id: 'courseId_furansuryourifurukoosu',
  name: 'フランス料理フルコース',
  description: '本場フランスの味を堪能できるフルコースです',
  genre: 'フランス料理',
  image: '/courseMenu/fuuransucourse.png',
  price: 640,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleCourseMenu1: CourseMenu = {
  id: 'courseMenuId_esukarugonogaarikkubataayaki',
  name: 'エスカルゴのガーリックバター焼き',
  description: '香ばしいガーリックバターが染み込んだエスカルゴです',
  allergen: '0001010010101100011010110000',
  image: '/courseMenu/esukarugo.pmg.png',

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleCourseMenu2: CourseMenu = {
  id: 'courseMenuId_kamonokonfi',
  name: '鴨のコンフィ',
  description: 'じっくりと低温調理された鴨肉のコンフィです',
  allergen: '1010110010000111010111001001',
  image: '/courseMenu/kamonoknfe.png',

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleSeat: Seat = {
  id: 'seatId_fuuransu',
  madori: '店内',
  smoking: true,
  table: false,
  seats: 6,
  maximum: 20,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleToilet: Toilet = {
  id: 'toiletId_fuuransu',
  inside: false,
  outside: false,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleToiletType: ToiletType = {
  id: 'toiletTypeId_fuuransu',
  gender: '別',
  wayou: true,
  washlet: true,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const samplePayment: Payment = {
  id: 'paymentId_fuuransu',
  card: '0110000',
  cash: false,
  QR: '101000',
  transit: true,
  IDPay: false,
  QuickPay: true,
  Nanaco: false,
  Edy: true,
  WAON: true,
  Pitapa: true,
  UNIONPAY: false,

  createdAt: new Date(),
  updatedAt: new Date(),
};
