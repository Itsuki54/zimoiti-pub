import { db } from '@/lib/prisma';
import {
  NextApiRequest,
  NextApiResponse,
} from 'next';

export default async function remove(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const { id: uid } = req.body;
    if (!uid) {
      return res
        .status(400)
        .json({ status: 'error', error: 'Toilet ID not provided' });
    }
    await db.toilet.delete({
      where: {
        id: uid,
      },
    });
    return res.status(200).json({ status: 'success' });
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