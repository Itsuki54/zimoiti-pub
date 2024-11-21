import { db } from '@/lib/prisma';
import {
  NextApiRequest,
  NextApiResponse,
} from 'next';

export default async function patch(req: NextApiRequest, res: NextApiResponse) {
  try {
    const {
      menuId,
      name,
      genre,
      description,
      readyTime,
      allergen,
      image,
      price,
      serviceTime,
      storeId,
      userId,
    } = req.body;
    if (!menuId || !name || !description || !storeId) {
      return res
        .status(400)
        .json({ status: 'error', error: 'User Data not provided' });
    }
    const Store = await db.store.findUnique({
      where: {
        id: storeId,
      },
    });
    if (!Store) {
      return res
        .status(400)
        .json({ status: 'error', error: 'Store not provided' });
    }

    const menu = await db.menu.update({
      where: {
        id: menuId,
      },
      data: {
        name,
        genre,
        description,
        readyTime,
        allergen,
        image,
        price,
        serviceTime,
        Store: {
          connect: {
            id: storeId,
          },
        },
      },
    });
    return res.status(200).json({ status: 'success', data: menu });
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
