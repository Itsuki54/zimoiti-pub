import {
  PrismaClient,
  Store,
  User,
} from '@prisma/client';
import argon2 from 'argon2';
import crypto from 'crypto';
import {
  sampleStore as sampleAmigo,
  sampleUser as sampleAmigoUser,
} from './store/amigo';
import {
  sampleStore as sampleChikaraya,
  sampleUser as sampleChikarayaUser,
} from './store/chikaraya';
import {
  sampleStore as sampleChuukaya,
  sampleUser as sampleChuukayaUser,
} from './store/chuukaya';
import {
  sampleStore as sampleDodoitu,
  sampleUser as sampleDodoituUser,
} from './store/dodoitu';
import {
  sampleStore as sampleFargarden,
  sampleUser as sampleFargardenUser,
} from './store/fargarden';
import {
  sampleStore as sampleFuuransu,
  sampleUser as sampleFuuransuUser,
} from './store/fuuransu';
import {
  sampleOwner as sampleGatutoriUser,
  sampleStore as sampleGatutori,
} from './store/gatsutorikazabana';
import {
  sampleStore as sampleHana,
  sampleUser as sampleHanaUser,
} from './store/hana';
import {
  sampleOwner as sampleIamUser,
  sampleStore as sampleIam,
} from './store/iamparfait';
import {
  sampleStore as sampleIndodo,
  sampleUser as sampleIndodoUser,
} from './store/indodo';
import {
  sampleOwner as sampleKainoUser,
  sampleStore as sampleKaino,
} from './store/kainotenpura';
import {
  sampleOwner as sampleKareeUser,
  sampleStore as sampleKaree,
} from './store/kareebukaaru';
import {
  sampleStore as sampleMaharaja,
  sampleUser as sampleMaharajaUser,
} from './store/maharaja';
import {
  sampleOwner as sampleMonmonUser,
  sampleStore as sampleMonmon,
} from './store/monmonja';
import {
  sampleStore as sampleOkonomi,
  sampleUser as sampleOkonomiUser,
} from './store/okonomi';
import {
  sampleStore as samplePapasuta,
  sampleUser as samplePapasutaUser,
} from './store/papasuta';
import {
  sampleOwner as samplePasutaabonnUser,
  sampleStore as samplePasutaabonn,
} from './store/pasutaabbondio';
import {
  sampleStore as samplePikkoro,
  sampleUser as samplePikkoroUser,
} from './store/pikkoro';
import {
  sampleOwner as sampleRamenhataUser,
  sampleStore as sampleRamenhata,
} from './store/raamenhata';
import {
  sampleStore as sampleRumieru,
  sampleUser as sampleRumieruUser,
} from './store/rumieru';
import {
  sampleStore as sampleRyuunosu,
  sampleUser as sampleRyuunosuUser,
} from './store/ryuunosu';
import {
  sampleStore as sampleSoul,
  sampleUser as sampleSoulUser,
} from './store/soul';
import {
  sampleOwner as sampleSushikawaUser,
  sampleStore as sampleSushikawa,
} from './store/sushikawachou';
import {
  sampleStore as sampleSushizusi,
  sampleUser as sampleSushizusiUser,
} from './store/sushizushi';
import {
  sampleStore as sampleSteeki,
  sampleUser as sampleSteekiUser,
} from './store/suteekinoteki';
import {
  sampleStore as sampleTonton,
  sampleUser as sampleTontonUser,
} from './store/tontonkatu';
import {
  sampleOwner as sampleTsurezureUser,
  sampleStore as sampleTsurezure,
} from './store/tsurezurenarusoba';
import {
  sampleOwner as sampleUdondonUser,
  sampleStore as sampleUdondon,
} from './store/udondon';
import {
  sampleStore as sampleYoiko,
  sampleUser as sampleYoikoUser,
} from './store/yoiko';
const genSalt = () => {
  const S = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  return Array.from(crypto.randomFillSync(new Buffer(24)))
    .map(v => S[v % S.length])
    .join('');
};

const db = new PrismaClient();

async function seed() {
  const salt = genSalt();
  const pepper = process.env.PEPPER;
  await db.store.create({
    data: sampleAmigo,
  });
  await db.user.create({
    data: {
      ...sampleAmigoUser,
      storeId: sampleAmigo.id,
      settingId: null,
      salt,
      password: await argon2.hash(pepper + sampleAmigoUser.password + salt),
    },
  });
  await db.store.create({
    data: sampleChikaraya,
  });
  await db.user.create({
    data: {
      ...sampleChikarayaUser,
      storeId: sampleChikaraya.id,
      salt,
      password: await argon2.hash(pepper + sampleChikarayaUser.password + salt),
    },
  });
  await db.store.create({
    data: sampleChuukaya,
  });
  await db.user.create({
    data: {
      ...sampleChuukayaUser,
      storeId: sampleChuukaya.id,
      salt,
      password: await argon2.hash(pepper + sampleChuukayaUser.password + salt),
    },
  });
  await db.store.create({
    data: sampleDodoitu,
  });
  await db.user.create({
    data: {
      ...sampleDodoituUser,
      storeId: sampleDodoitu.id,
      salt,
      password: await argon2.hash(pepper + sampleDodoituUser.password + salt),
    },
  });
  await db.store.create({
    data: sampleFargarden,
  });
  await db.user.create({
    data: {
      ...sampleFargardenUser,
      storeId: sampleFargarden.id,
      salt,
      password: await argon2.hash(pepper + sampleFargardenUser.password + salt),
    },
  });
  await db.store.create({
    data: sampleFuuransu,
  });
  await db.user.create({
    data: {
      ...sampleFuuransuUser,
      storeId: sampleFuuransu.id,
      salt,
      password: await argon2.hash(pepper + sampleFuuransuUser.password + salt),
    },
  });
  await db.store.create({
    data: sampleGatutori,
  });
  await db.user.create({
    data: {
      ...sampleGatutoriUser,
      storeId: sampleGatutori.id,
      salt,
      password: await argon2.hash(pepper + sampleGatutoriUser.password + salt),
    },
  });
  await db.store.create({
    data: sampleHana,
  });
  await db.user.create({
    data: {
      ...sampleHanaUser,
      storeId: sampleHana.id,
      salt,
      password: await argon2.hash(pepper + sampleHanaUser.password + salt),
    },
  });
  await db.store.create({
    data: sampleIam,
  });
  await db.user.create({
    data: {
      ...sampleIamUser,
      storeId: sampleIam.id,
      salt,
      password: await argon2.hash(pepper + sampleIamUser.password + salt),
    },
  });
  await db.store.create({
    data: sampleIndodo,
  });
  await db.user.create({
    data: {
      ...sampleIndodoUser,
      storeId: sampleIndodo.id,
      salt,
      password: await argon2.hash(pepper + sampleIndodoUser.password + salt),
    },
  });
  await db.store.create({
    data: sampleKaino,
  });
  await db.user.create({
    data: {
      ...sampleKainoUser,
      storeId: sampleKaino.id,
      salt,
      password: await argon2.hash(pepper + sampleKainoUser.password + salt),
    },
  });
  await db.store.create({
    data: sampleKaree,
  });
  await db.user.create({
    data: {
      ...sampleKareeUser,
      storeId: sampleKaree.id,
      salt,
      password: await argon2.hash(pepper + sampleKareeUser.password + salt),
    },
  });
  await db.store.create({
    data: sampleMaharaja,
  });
  await db.user.create({
    data: {
      ...sampleMaharajaUser,
      storeId: sampleMaharaja.id,
      salt,
      password: await argon2.hash(pepper + sampleMaharajaUser.password + salt),
    },
  });
  await db.store.create({
    data: sampleMonmon,
  });
  await db.user.create({
    data: {
      ...sampleMonmonUser,
      storeId: sampleMonmon.id,
      salt,
      password: await argon2.hash(pepper + sampleMonmonUser.password + salt),
    },
  });
  await db.store.create({
    data: sampleOkonomi,
  });
  await db.user.create({
    data: {
      ...sampleOkonomiUser,
      storeId: sampleOkonomi.id,
      salt,
      password: await argon2.hash(pepper + sampleOkonomiUser.password + salt),
    },
  });
  await db.store.create({
    data: samplePapasuta,
  });
  await db.user.create({
    data: {
      ...samplePapasutaUser,
      storeId: samplePapasuta.id,
      salt,
      password: await argon2.hash(pepper + samplePapasutaUser.password + salt),
    },
  });
  await db.store.create({
    data: samplePasutaabonn,
  });
  await db.user.create({
    data: {
      ...samplePasutaabonnUser,
      storeId: samplePasutaabonn.id,
      salt,
      password: await argon2.hash(
        pepper + samplePasutaabonnUser.password + salt,
      ),
    },
  });
  await db.store.create({
    data: samplePikkoro,
  });
  await db.user.create({
    data: {
      ...samplePikkoroUser,
      storeId: samplePikkoro.id,
      salt,
      password: await argon2.hash(pepper + samplePikkoroUser.password + salt),
    },
  });
  await db.store.create({
    data: sampleRamenhata,
  });
  await db.user.create({
    data: {
      ...sampleRamenhataUser,
      storeId: sampleRamenhata.id,
      salt,
      password: await argon2.hash(pepper + sampleRamenhataUser.password + salt),
    },
  });
  await db.store.create({
    data: sampleRumieru,
  });
  await db.user.create({
    data: {
      ...sampleRumieruUser,
      storeId: sampleRumieru.id,
      salt,
      password: await argon2.hash(pepper + sampleRumieruUser.password + salt),
    },
  });
  await db.store.create({
    data: sampleRyuunosu,
  });
  await db.user.create({
    data: {
      ...sampleRyuunosuUser,
      storeId: sampleRyuunosu.id,
      salt,
      password: await argon2.hash(pepper + sampleRyuunosuUser.password + salt),
    },
  });
  await db.store.create({
    data: sampleSoul,
  });
  await db.user.create({
    data: {
      ...sampleSoulUser,
      storeId: sampleSoul.id,
      salt,
      password: await argon2.hash(pepper + sampleSoulUser.password + salt),
    },
  });
  await db.store.create({
    data: sampleSteeki,
  });
  await db.user.create({
    data: {
      ...sampleSteekiUser,
      storeId: sampleSteeki.id,
      salt,
      password: await argon2.hash(pepper + sampleSteekiUser.password + salt),
    },
  });
  await db.store.create({
    data: sampleSushikawa,
  });
  await db.user.create({
    data: {
      ...sampleSushikawaUser,
      storeId: sampleSushikawa.id,
      salt,
      password: await argon2.hash(pepper + sampleSushikawaUser.password + salt),
    },
  });
  await db.store.create({
    data: sampleSushizusi,
  });
  await db.user.create({
    data: {
      ...sampleSushizusiUser,
      storeId: sampleSushizusi.id,
      salt,
      password: await argon2.hash(pepper + sampleSushizusiUser.password + salt),
    },
  });
  await db.store.create({
    data: sampleTonton,
  });
  await db.user.create({
    data: {
      ...sampleTontonUser,
      storeId: sampleTonton.id,
      salt,
      password: await argon2.hash(pepper + sampleTontonUser.password + salt),
    },
  });
  await db.store.create({
    data: sampleTsurezure,
  });
  await db.user.create({
    data: {
      ...sampleTsurezureUser,
      storeId: sampleTsurezure.id,
      salt,
      password: await argon2.hash(pepper + sampleTsurezureUser.password + salt),
    },
  });
  await db.store.create({
    data: sampleUdondon,
  });
  await db.user.create({
    data: {
      ...sampleUdondonUser,
      storeId: sampleUdondon.id,
      salt,
      password: await argon2.hash(pepper + sampleUdondonUser.password + salt),
    },
  });
  await db.store.create({
    data: sampleYoiko,
  });
  await db.user.create({
    data: {
      ...sampleYoikoUser,
      storeId: sampleYoiko.id,
      salt,
      password: await argon2.hash(pepper + sampleYoikoUser.password + salt),
    },
  });
}

seed()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
  });
