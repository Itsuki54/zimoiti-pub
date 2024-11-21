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
  id: 'ownerId_amitto・sharuma',
  email: 'amitto・sharuma@example.com',
  name: 'アミット・シャルマ',
  password: 'password_amitto・sharuma',
  salt: 'salt9',
  type: UserRole.OWNER,
  isSubscribed: false,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleSetting: Setting = {
  id: 'settingId_indodo',
  recommned: false,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleStore: Store = {
  id: 'storeId_indodo',
  name: 'インドド',

  phone: '99-3224-8346',
  email: 'indodo@example.com',
  genre: 'インド料理',
  furigana: 'いんどど',
  tags: 'インド,なん',
  url: 'https://www.indodo.co.jp',
  image: '/store/indodo.png',
  barrier: false,
  light: 1,
  lively: 1,
  location: 'オフィス街',
  language: '111110111',
  birthday: false,
  mobile: false,
  wifi: false,
  pet: false,
  takeout: false,
  smoking: true,
  stamp: false,
  point: false,
  invoice: false,
  kids: true,
  freeDrink: '水',
  otoshi: 400,
  serviceFee: 100,
  bring: 4,
  unlimited: 100,
  buffet: 1080,
  outlet: 25,
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleParking: Parking = {
  id: 'parkingId_indodo',
  inside: true,
  outside: true,
  capacity: 2,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleMenu1: Menu = {
  id: 'menuId_chikinteikkamasara',
  name: 'チキンティッカマサラ',
  genre: 'インド料理',
  description: 'スパイシーでクリーミーなトマトソースで煮込んだチキン料理です',
  readyTime: '5分',
  allergen: '1111111000011101010111011000',
  image: '/menu/tikintxika.png',
  price: 510,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleMenu2: Menu = {
  id: 'menuId_biriyani',
  name: 'ビリヤニ',
  genre: 'インド料理',
  description: '香り豊かなスパイスとともに炊き上げたインディカ米の炊き込みご飯です',
  readyTime: '6分',
  allergen: '1001001100101000010000110011',
  image: '/menu/biriyani.png',
  price: 600,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleAddress: Address = {
  id: 'addressId_indodo',
  street: 'もみじ通り',
  city: '東京都',
  state: '杉並区',
  zip: '224-8346',

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleTime: Time = {
  id: 'timeId_indodo',
  day: '0100111',
  open: '6:00',
  close: '22:00',
  tag: '通常営業時間',

  // reserveId: 'reserveId_indodo',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleServiceTime: ServiceTime = {
  id: 'serviceTimeId_indodo',
  day: '1010010',
  start: '6:00',
  end: '8:00',
  tag: 'モーニング',

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleReserve: Reserve = {
  id: 'reserveId_indodo',

  phone: '99-3224-8346',
  email: 'indodo@example.com',
  url: 'https://www.indodo.co.jp/reserve',
};

export const sampleCourse: Course = {
  id: 'courseId_ousamanoindiankoosu',
  name: '王様のインディアンコース',
  description: '豪華なインド料理のフルコースで、さまざまな味を楽しめます',
  genre: 'インド料理',
  image: '/courseMenu/indodocourse.png',
  price: 2080,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleCourseMenu1: CourseMenu = {
  id: 'courseMenuId_roganjoshu',
  name: 'ロガンジョシュ',
  description: '柔らかいラム肉を使ったスパイシーなカレーです',
  allergen: '0010011100001110110100100010',
  image: '/courseMenu/rogan.png',

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleCourseMenu2: CourseMenu = {
  id: 'courseMenuId_samosatochatsune',
  name: 'サモサとチャツネ',
  description: 'サクサクのパイ生地に詰められたスパイシーな具材と甘酸っぱいチャツネのセットです',
  allergen: '0000000010110001101110100011',
  image: '/courseMenu/samone.png',

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleSeat: Seat = {
  id: 'seatId_indodo',
  madori: '',
  smoking: false,
  table: true,
  seats: 13,
  maximum: 20,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleToilet: Toilet = {
  id: 'toiletId_indodo',
  inside: true,
  outside: true,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleToiletType: ToiletType = {
  id: 'toiletTypeId_indodo',
  gender: '別',
  wayou: true,
  washlet: false,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const samplePayment: Payment = {
  id: 'paymentId_indodo',
  card: '0001101',
  cash: false,
  QR: '011111',
  transit: false,
  IDPay: true,
  QuickPay: false,
  Nanaco: false,
  Edy: false,
  WAON: false,
  Pitapa: false,
  UNIONPAY: false,

  createdAt: new Date(),
  updatedAt: new Date(),
};
