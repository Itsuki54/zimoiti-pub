import { db } from '@/lib/prisma';
import {
  NextApiRequest,
  NextApiResponse,
} from 'next';

export default async function get(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { id: uid } = req.body;
    if (!uid) {
      return res
        .status(400)
        .json({ status: 'error', error: 'Time ID not provided' });
    }
    const time = await db.time.findUnique({
      where: {
        id: uid,
      },
    });
    if (!time) {
      return res.status(404).json({ status: 'error', error: 'Time not found' });
    }
    return res.status(200).json({ status: 'success', data: time });
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
