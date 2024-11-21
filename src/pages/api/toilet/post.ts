import { db } from '@/lib/prisma';
import {
  NextApiRequest,
  NextApiResponse,
} from 'next';

export default async function post(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { inside, outside, storeId, toiletType, Seat } = req.body;
    if (!inside || !outside || !storeId || !toiletType || !Seat) {
      return res
        .status(400)
        .json({ status: 'error', error: 'User Data not provided' });
    }
    const toilet = await db.toilet.create({
      data: {
        inside,
        outside,
        storeId,
        toiletType,
        Seat,
      },
    });
    return res.status(200).json({ status: 'success', data: toilet });
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
