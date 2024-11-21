import { db } from '@/lib/prisma';
import {
  NextApiRequest,
  NextApiResponse,
} from 'next';

export default async function patch(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { id: uid, name, description, allergen, image, courseId } = req.body;
    if (!uid || !name || !description || !allergen || !image || !courseId) {
      return res
        .status(400)
        .json({ status: 'error', error: 'User Data not provided' });
    }
    const course = await db.course.findUnique({
      where: {
        id: courseId,
      },
    });
    if (!course) {
      return res
        .status(400)
        .json({ status: 'error', error: 'course not provided' });
    }
    const courseMenu = await db.courseMenu.update({
      where: {
        id: uid,
      },
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
