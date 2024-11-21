import { db } from '@/lib/prisma';
import {
  NextApiRequest,
  NextApiResponse,
} from 'next';

export default async function patch(req: NextApiRequest, res: NextApiResponse) {
  try {
    const {
      id: uid,
      name,
      description,
      genre,
      image,
      price,
      courseMenuId,
      storeId,
    } = req.body;
    if (
      !uid ||
      !name ||
      !description ||
      !genre ||
      !image ||
      !price ||
      !courseMenuId ||
      !storeId
    ) {
      return res
        .status(400)
        .json({ status: 'error', error: 'User Data not provided' });
    }
    const Store = await db.store.findUnique({
      where: {
        id: storeId,
      },
    });
    const CorseMenu = await db.courseMenu.findUnique({
      where: {
        id: courseMenuId,
      },
    });
    if (!Store) {
      return res
        .status(400)
        .json({ status: 'error', error: 'Store not provided' });
    }
    if (!CorseMenu) {
      return res
        .status(400)
        .json({ status: 'error', error: 'CourseMenu not provided' });
    }
    const course = await db.course.update({
      where: {
        id: uid,
      },
      data: {
        name,
        description,
        genre,
        image,
        price,
        courseMenuId,
        CourseMenu: {
          connect: {
            id: courseMenuId,
          },
        },
        storeId,
        Store: {
          connect: {
            id: storeId,
          },
        },
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
