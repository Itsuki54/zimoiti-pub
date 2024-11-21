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

export const sampleOwner: User = {
  id: 'udondon-owner-id',
  email: 'udondon@example.com',
  name: 'うどんどん',
  salt: 'salt9',
  password: '00123',
  type: UserRole.OWNER,
  isSubscribed: false,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleSetting: Setting = {
  id: 'udondon-setting-id',
  recommned: true,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleStore: Store = {
  id: 'udondon-store-id',
  name: 'うどんどん店',

  phone: '123-456-7890',
  email: 'udondon@store.com',
  genre: '日本料理',
  furigana: 'うどんどん',
  tags: 'うどん,やすい',
  url: 'https://www.udondon.co.jp',
  image: '/store/udondonten.png',
  barrier: false,
  light: 2,
  lively: 2,
  location: '繁華街',
  language: 'JP',
  birthday: true,
  mobile: true,
  wifi: false,
  pet: false,
  takeout: true,
  smoking: false,
  stamp: false,
  point: true,
  invoice: false,
  kids: true,
  freeDrink: null,
  otoshi: 200,
  serviceFee: 150,
  bring: 50,
  unlimited: 100,
  buffet: 120,
  outlet: 30,
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleParking: Parking = {
  id: 'udondon-parking-id',
  inside: false,
  outside: true,
  capacity: 20,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleMenu: Menu = {
  id: 'udondon-menu-id-1',
  name: '讃岐うどん',
  genre: '日本料理',
  description: '美味しいうどんどん料理',
  readyTime: '15分',
  allergen: '0000000000000000000000000000',
  image: '/menu/sanukiudon.png',
  price: 800,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleMenu2: Menu = {
  id: 'udondon-menu-id-2',
  name: '狐うどん',
  genre: '日本料理',
  description: '美味しいうどんどん料理',
  readyTime: '15分',
  allergen: '0000000000000000000000000000',
  image: '/menu/kituneudon.png',
  price: 800,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleAddress: Address = {
  id: 'udondon-address-id',
  street: 'うどん通り123',
  city: '東京',
  state: '中央区',
  zip: '123-4567',

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleTime: Time = {
  id: 'udondon-time-id',
  day: '0111111',
  open: '09:00',
  close: '21:00',
  tag: '通常営業時間',

  parkingId: null,
  // reserve:  'udondon-reserve-id',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleServiceTime: ServiceTime = {
  id: 'udondon-servicetime-id',
  day: '0111111',
  start: '10:00',
  end: '22:00',
  tag: 'ディナー',

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleReserve: Reserve = {
  id: 'udondon-reserve-id',

  phone: '123-456-7890',
  email: 'reserve@udondon.com',
  url: 'http://reserve.udondon.com',
};

export const sampleCourse: Course = {
  id: 'udondon-course-id',
  name: 'うどんどんコース',
  description: '特別なうどんどんコース',
  genre: '日本料理',
  image: '/courseMenu/udoncourse.png',
  price: 3000,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleCourseMenu: CourseMenu = {
  id: 'udondon-coursemenu-id',
  name: '肉うどん',
  description: 'コース内の美味しいうどんどん料理',
  allergen: '0000000000000000000000000000',
  image: '/courseMenu/nikuudon.png',

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleCourseMenu2: CourseMenu = {
  id: 'udondon-coursemenu-id2',
  name: '狐うどん',
  description: 'コース内の美味しいうどんどん料理',
  allergen: '0000000000000000000000000000',
  image: '/courseMenu/kituneudon.png',

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleSeat: Seat = {
  id: 'udondon-seat-id',
  madori: 'オープン',
  smoking: false,
  table: true,
  seats: 4,
  maximum: 6,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleToilet: Toilet = {
  id: 'udondon-toilet-id',
  inside: true,
  outside: false,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleToiletType: ToiletType = {
  id: 'udondon-toilettype-id',
  gender: '共用',
  wayou: true,
  washlet: false,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const samplePayment: Payment = {
  id: 'udondon-payment-id',
  card: '1111000',
  cash: true,
  QR: '111011',
  transit: false,
  IDPay: true,
  QuickPay: false,
  Nanaco: true,
  Edy: false,
  WAON: true,
  Pitapa: false,
  UNIONPAY: true,

  createdAt: new Date(),
  updatedAt: new Date(),
};
