import { db } from '@/lib/prisma';
import {
  NextApiRequest,
  NextApiResponse,
} from 'next';

export default async function patch(req: NextApiRequest, res: NextApiResponse) {
  try {
    const {
      storeId,
      userId,
      name,
      phone,
      email,
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
      morning,
      lunch,
      dinner,
      serviceFee,
      bring,
      unlimited,
      buffet,
      outlet,
    } = req.body;
    if (
      (!storeId || !userId) &&
      (!name || !phone || !email || !genre) &&
      !language
    ) {
      return res
        .status(400)
        .json({ status: 'error', error: 'Store Data not provided' });
    }
    const user = await db.user.findFirst({
      where: {
        id: userId,
      },
    });
    if (!user) {
      return res.status(400).json({ status: 'error', error: 'User not found' });
    }
    if (user.storeId !== storeId) {
      return res
        .status(400)
        .json({ status: 'error', error: 'User not authorized' });
    }
    const store = await db.store.update({
      where: {
        id: storeId,
      },
      data: {
        name,
        phone,
        email,
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
        morning,
        lunch,
        dinner,
        bring,
        unlimited,
        buffet,
        outlet,
      },
    });
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
