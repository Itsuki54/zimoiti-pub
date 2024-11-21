import { db } from '@/lib/prisma';
import {
  NextApiRequest,
  NextApiResponse,
} from 'next';

export default async function get(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { id } = req.query;
    console.log('id', id);
    if (!id) {
      return res
        .status(400)
        .json({ status: 'error', error: 'User ID not provided' });
    }
    const course = await db.course.findMany({
      where: {
        storeId: id.toString(),
      },
    });
    if (!course) {
      return res.status(404).json({ status: 'error', error: 'User not found' });
    }
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
