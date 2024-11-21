import { db } from '@/lib/prisma';
import {
  NextApiRequest,
  NextApiResponse,
} from 'next';

export default async function post(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { name, description, allergen, image, courseId } = req.body;
    if (!name || !description || !allergen || !image || !courseId) {
      return res
        .status(400)
        .json({ status: 'error', error: 'User Data not provided' });
    }
    const Course = await db.store.findUnique({
      where: {
        id: courseId,
      },
    });
    if (!Course) {
      return res
        .status(400)
        .json({ status: 'error', error: 'Course not provided' });
    }
    const courseMenu = await db.courseMenu.create({
      data: {
        name,
        description,
        allergen,
        image,
        courseId,
        Course: {
          connect: {
            id: courseId,
          },
        },
      },
    });
    return res.status(200).json({ status: 'success', data: courseMenu });
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
