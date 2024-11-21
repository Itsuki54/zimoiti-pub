import { db } from '@/lib/prisma';
import {
  NextApiRequest,
  NextApiResponse,
} from 'next';

export default async function get(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { id: reserveId } = req.body;
    if (!reserveId) {
      return res
        .status(400)
        .json({ status: 'error', error: 'Reserve ID not provided' });
    }
    const reserve = await db.reserve.findUnique({
      where: {
        id: reserveId,
      },
      include: {
        time: true, // 関連するtime情報を含める
      },
    });
    if (!reserve) {
      return res
        .status(404)
        .json({ status: 'error', error: 'Reserve not found' });
    }
    return res.status(200).json({ status: 'success', data: reserve });
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
