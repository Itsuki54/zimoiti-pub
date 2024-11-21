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
  id: 'ownerId_yamamotomei',
  email: 'yamamotomei@example.com',
  name: '山本明',
  password: 'password_yamamotomei',
  type: UserRole.OWNER,
  storeId: 'storeId_betonamuresutoranfoogaaden',
  settingId: 'settingId_betonamuresutoranfoogaaden',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleSetting: Setting = {
  id: 'settingId_betonamuresutoranfoogaaden',
  recommned: true,
  ownerId: 'ownerId_yamamotomei',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleStore: Store = {
  id: 'storeId_betonamuresutoranfoogaaden',
  name: 'ベトナムレストラン フォーガーデン',
  addressId: 'addressId_betonamuresutoranfoogaaden',
  phone: '99-6077-0564',
  email: 'betonamuresutoranfoogaaden@example.com',
  genre: 'ベトナム料理',
  url: 'https://www.betonamuresutoranfoogaaden.co.jp',
  image: '/store/fargarden.jpg',
  barrier: false,
  light: 1,
  lively: 2,
  location: 'オフィス街',
  language: '111101111',
  birthday: false,
  mobile: false,
  wifi: false,
  pet: false,
  takeout: false,
  smoking: false,
  stamp: false,
  point: false,
  invoice: false,
  kids: true,
  freeDrink: null,
  otoshi: 400,
  serviceFee: 300,
  bring: 3,
  unlimited: 100,
  buffet: 1320,
  outlet: 2,
  createdAt: new Date(),
  updatedAt: new Date(),
  // paymentId: "paymentId_betonamuresutoranfoogaaden",
  // parkingId: "parkingId_betonamuresutoranfoogaaden",
  // timeId: "timeId_betonamuresutoranfoogaaden",
};

export const sampleParking: Parking = {
  id: 'parkingId_betonamuresutoranfoogaaden',
  inside: true,
  outside: false,
  capacity: 11,
  storeId: 'storeId_betonamuresutoranfoogaaden',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleMenu1: Menu = {
  id: 'menuId_foo',
  name: 'フォー',
  genre: '惣菜',
  description: '新鮮な素材をカラッと揚げました。',
  readyTime: '9分',
  allergen: '1100100110011010001111100111',
  image: '/menu/hiyasimen.jpg',
  price: 530,
  storeId: 'storeId_betonamuresutoranfoogaaden',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleMenu2: Menu = {
  id: 'menuId_namaharumakiki',
  name: '生春巻き',
  genre: '鍋料理',
  description: '甘辛のタレで仕上げました。',
  readyTime: '13分',
  allergen: '0111001111000111111011100101',
  image: '/menu/hiyasimen.jpg',
  price: 530,
  storeId: 'storeId_betonamuresutoranfoogaaden',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleAddress: Address = {
  id: 'addressId_betonamuresutoranfoogaaden',
  street: 'さくら通り',
  city: '東京都',
  state: '墨田区',
  zip: '077-0564',
  storeId: 'storeId_betonamuresutoranfoogaaden',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleTime: Time = {
  id: 'timeId_betonamuresutoranfoogaaden',
  day: '1110101',
  open: '6:00',
  close: '20:00',
  tag: '通常営業時間',
  storeId: 'storeId_betonamuresutoranfoogaaden',
  parkingId: 'parkingId_betonamuresutoranfoogaaden',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleServiceTime: ServiceTime = {
  id: 'serviceTimeId_betonamuresutoranfoogaaden',
  day: '0100010',
  start: '6:00',
  end: '8:00',
  tag: 'モーニング',
  menuId: 'menuId_foo',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleReserve: Reserve = {
  id: 'reserveId_betonamuresutoranfoogaaden',
  storeId: 'storeId_betonamuresutoranfoogaaden',
  phone: '99-6077-0564',
  email: 'betonamuresutoranfoogaaden@example.com',
  url: 'https://www.betonamuresutoranfoogaaden.co.jp/reserve',
  timeId: 'timeId_betonamuresutoranfoogaaden',
};

export const sampleCourse: Course = {
  id: 'courseId_betonamudinaakoosu',
  name: 'ベトナムディナーコース',
  description: 'ベトナムの味を楽しめるコース。',
  genre: 'ベトナム料理',
  image: '/courseMenu/vitnamu.jpg',
  price: 920,
  storeId: 'storeId_betonamuresutoranfoogaaden',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleCourseMenu1: CourseMenu = {
  id: 'courseMenuId_bainmii',
  name: 'バインミー',
  description: '自家製の発酵キムチ。',
  allergen: '0010011111101000011100100010',
  image: '/courseMenu/kimuti.jpg',
  courseId: 'courseId_betonamudinaakoosu',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleCourseMenu2: CourseMenu = {
  id: 'courseMenuId_betonamukazeageharumakiki',
  name: 'ベトナム風揚げ春巻き',
  description: '健康的な薬膳スープ。',
  allergen: '0101110100111010000100111110',
  image: '/courseMenu/kimuti.jpg',
  courseId: 'courseId_betonamudinaakoosu',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleSeat: Seat = {
  id: 'seatId_betonamuresutoranfoogaaden',
  madori: '',
  smoking: true,
  table: false,
  seats: 13,
  maximum: 24,
  storeId: 'storeId_betonamuresutoranfoogaaden',
  toiletId: 'toiletId_betonamuresutoranfoogaaden',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleToilet: Toilet = {
  id: 'toiletId_betonamuresutoranfoogaaden',
  inside: false,
  outside: true,
  storeId: 'storeId_betonamuresutoranfoogaaden',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleToiletType: ToiletType = {
  id: 'toiletTypeId_betonamuresutoranfoogaaden',
  gender: '別',
  wayou: false,
  washlet: true,
  toiletId: 'toiletId_betonamuresutoranfoogaaden',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const samplePayment: Payment = {
  id: 'paymentId_betonamuresutoranfoogaaden',
  card: '1010111',
  cash: true,
  QR: '100010',
  transit: false,
  IDPay: false,
  QuickPay: true,
  Nanaco: false,
  Edy: true,
  WAON: false,
  Pitapa: false,
  UNIONPAY: false,
  storeId: 'storeId_betonamuresutoranfoogaaden',
  createdAt: new Date(),
  updatedAt: new Date(),
};
