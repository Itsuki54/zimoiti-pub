import { search } from '@/lib/meilisearch';
import { db } from '@/lib/prisma';
import {
  NextApiRequest,
  NextApiResponse,
} from 'next';

export default async function post(req: NextApiRequest, res: NextApiResponse) {
  try {
    const {
      name,
      phone,
      email,
      tags,
      genre,
      url,
      image,
      barrier,
      light,
      lively,
      location,
      language,
      birthday,
      mobile,
      wifi,
      pet,
      takeout,
      smoking,
      stamp,
      point,
      invoice,
      kids,
      freeDrink,
      otoshi,
      serviceFee,
      bring,
      unlimited,
      buffet,
      outlet,
      userId,
    } = req.body;

    // 必須フィールドのバリデーション
    if (!name || !phone || !email || !genre) {
      return res
        .status(400)
        .json({ status: 'error', error: 'Store Data not provided' });
    }

    const store = await db.store.create({
      data: {
        name,
        phone,
        email,
        tags,
        genre,
        url,
        image,
        barrier,
        light,
        lively,
        location,
        language,
        birthday,
        mobile,
        wifi,
        pet,
        takeout,
        smoking,
        stamp,
        point,
        invoice,
        kids,
        freeDrink,
        otoshi,
        serviceFee,
        bring,
        unlimited,
        buffet,
        outlet,
      },
    });
    /*await search.index("ji_store").addDocuments([
      {
        id: store.id,
        name: store.name,
        phone: store.phone,
        email: store.email,
        tags: store.tags,
        genre: store.genre,
        url: store.url,
        image: store.image,
        barrier: store.barrier,
        light: store.light,
        lively: store.lively,
        location: store.location,
        language: store.language,
        birthday: store.birthday,
        mobile: store.mobile,
        wifi: store.wifi,
        pet: store.pet,
        takeout: store.takeout,
        smoking: store.smoking,
        stamp: store.stamp,
        point: store.point,
        invoice: store.invoice,
        kids: store.kids,
        freeDrink: store.freeDrink,
        otoshi: store.otoshi,
        serviceFee: store.serviceFee,
        bring: store.bring,
        unlimited: store.unlimited,
        buffet: store.buffet,
        outlet: store.outlet,
      },
    ]);*/
    if (userId) {
      const user = await db.user.findUnique({
        where: {
          id: userId,
        },
      });
      if (!user) {
        return res
          .status(400)
          .json({ status: 'error', error: 'User not provided' });
      }

      await db.user.update({
        where: {
          id: userId,
        },
        data: {
          storeId: store.id,
        },
      });
    }

    return res.status(200).json({ status: 'success', data: store });
  }
  catch (e) {
    if (e instanceof Error) {
      return res.status(500).json({ status: 'error', error: e.message });
    }
    else {
      return res.status(500).json({ status: 'error', error: e });
    }
  }
}
