import { db } from '@/lib/prisma';
import {
  NextApiRequest,
  NextApiResponse,
} from 'next';

export default async function post(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { name, description, genre, image, price, storeId, courseMenuId } = req.body;
    if (!name || !description || !genre || !price || !storeId) {
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

    const course = await db.course.create({
      data: {
        name,
        description,
        genre,
        image,
        price,
        storeId,
      },
    });
    return res.status(200).json({ status: 'success', data: course });
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
