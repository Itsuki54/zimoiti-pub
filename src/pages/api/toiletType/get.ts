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
        .json({ status: 'error', error: 'ToiletType ID not provided' });
    }
    const type = await db.toiletType.findUnique({
      where: {
        id: uid,
      },
    });
    if (!type) {
      return res
        .status(404)
        .json({ status: 'error', error: 'ToiletType not found' });
    }
    return res.status(200).json({ status: 'success', data: type });
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
