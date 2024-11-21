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
  id: 'ownerId_satouhanako',
  email: 'satouhanako@example.com',
  name: '佐藤花子',
  password: 'password_satouhanako',
  type: UserRole.OWNER,
  storeId: 'storeId_furenchiresutoranrumieeru',
  settingId: 'settingId_furenchiresutoranrumieeru',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleSetting: Setting = {
  id: 'settingId_furenchiresutoranrumieeru',
  recommned: false,
  ownerId: 'ownerId_satouhanako',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleStore: Store = {
  id: 'storeId_furenchiresutoranrumieeru',
  name: 'フレンチレストラン ルミエール',
  addressId: 'addressId_furenchiresutoranrumieeru',
  phone: '99-0435-3849',
  email: 'furenchiresutoranrumieeru@example.com',
  genre: 'フランス料理',
  url: 'https://www.furenchiresutoranrumieeru.co.jp',
  image: '/store/rumieru.jpg',
  barrier: false,
  light: 2,
  lively: 2,
  location: '住宅街',
  language: '000111010',
  birthday: true,
  mobile: false,
  wifi: false,
  pet: true,
  takeout: true,
  smoking: true,
  stamp: true,
  point: false,
  invoice: false,
  kids: false,
  freeDrink: '水',
  otoshi: 200,
  serviceFee: 300,
  bring: 3,
  unlimited: 200,
  buffet: 1300,
  outlet: 21,
  createdAt: new Date(),
  updatedAt: new Date(),
  // paymentId: "paymentId_furenchiresutoranrumieeru",
  // parkingId: "parkingId_furenchiresutoranrumieeru",
  // timeId: "timeId_furenchiresutoranrumieeru",
};

export const sampleParking: Parking = {
  id: 'parkingId_furenchiresutoranrumieeru',
  inside: false,
  outside: false,
  capacity: 3,
  storeId: 'storeId_furenchiresutoranrumieeru',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleMenu1: Menu = {
  id: 'menuId_kamonoroosuto',
  name: '鴨のロースト',
  genre: '惣菜',
  description: '新鮮な素材をカラッと揚げました。',
  readyTime: '11分',
  allergen: '0110001101110110111001010101',
  image: '/menu/kamo.jpg',
  price: 660,
  storeId: 'storeId_furenchiresutoranrumieeru',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleMenu2: Menu = {
  id: 'menuId_foaguranoteriinu',
  name: 'フォアグラのテリーヌ',
  genre: '鍋料理',
  description: '甘辛のタレで仕上げました。',
  readyTime: '20分',
  allergen: '1000111001011011000011111001',
  image: '/menu/foagura.jpg',
  price: 620,
  storeId: 'storeId_furenchiresutoranrumieeru',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleAddress: Address = {
  id: 'addressId_furenchiresutoranrumieeru',
  street: 'さくら通り',
  city: '東京都',
  state: '港区',
  zip: '435-3849',
  storeId: 'storeId_furenchiresutoranrumieeru',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleTime: Time = {
  id: 'timeId_furenchiresutoranrumieeru',
  day: '1111100',
  open: '6:00',
  close: '21:00',
  tag: '通常営業時間',
  storeId: 'storeId_furenchiresutoranrumieeru',
  parkingId: 'parkingId_furenchiresutoranrumieeru',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleServiceTime: ServiceTime = {
  id: 'serviceTimeId_furenchiresutoranrumieeru',
  day: '0111011',
  start: '18:00',
  end: '21:00',
  tag: 'ディナー',
  menuId: 'menuId_kamonoroosuto',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleReserve: Reserve = {
  id: 'reserveId_furenchiresutoranrumieeru',
  storeId: 'storeId_furenchiresutoranrumieeru',
  phone: '99-0435-3849',
  email: 'furenchiresutoranrumieeru@example.com',
  url: 'https://www.furenchiresutoranrumieeru.co.jp/reserve',
  timeId: 'timeId_furenchiresutoranrumieeru',
};

export const sampleCourse: Course = {
  id: 'courseId_furenchidinaakoosu',
  name: 'フレンチディナーコース',
  description: '豪華なディナーを楽しめます。',
  genre: 'フランス料理',
  image: '/courseMenu/frenti.jpg',
  price: 1220,
  storeId: 'storeId_furenchiresutoranrumieeru',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleCourseMenu1: CourseMenu = {
  id: 'courseMenuId_onionguratansuupu',
  name: 'オニオングラタンスープ',
  description: '濃厚な味わいです。',
  allergen: '1101111001111110010000110011',
  image: '/courseMenu/soup.jpg',
  courseId: 'courseId_furenchidinaakoosu',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleCourseMenu2: CourseMenu = {
  id: 'courseMenuId_esukarugo',
  name: 'エスカルゴ',
  description: 'ガーリックバターが美味。',
  allergen: '1001011000011101011010001001',
  image: '/courseMenu/esukarugo.jpg',
  courseId: 'courseId_furenchidinaakoosu',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleSeat: Seat = {
  id: 'seatId_furenchiresutoranrumieeru',
  madori: '',
  smoking: true,
  table: false,
  seats: 7,
  maximum: 24,
  storeId: 'storeId_furenchiresutoranrumieeru',
  toiletId: 'toiletId_furenchiresutoranrumieeru',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleToilet: Toilet = {
  id: 'toiletId_furenchiresutoranrumieeru',
  inside: true,
  outside: false,
  storeId: 'storeId_furenchiresutoranrumieeru',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleToiletType: ToiletType = {
  id: 'toiletTypeId_furenchiresutoranrumieeru',
  gender: '別',
  wayou: false,
  washlet: false,
  toiletId: 'toiletId_furenchiresutoranrumieeru',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const samplePayment: Payment = {
  id: 'paymentId_furenchiresutoranrumieeru',
  card: '0111110',
  cash: true,
  QR: '011011',
  transit: false,
  IDPay: false,
  QuickPay: true,
  Nanaco: false,
  Edy: true,
  WAON: false,
  Pitapa: true,
  UNIONPAY: true,
  storeId: 'storeId_furenchiresutoranrumieeru',
  createdAt: new Date(),
  updatedAt: new Date(),
};
