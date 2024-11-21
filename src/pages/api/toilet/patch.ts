import { db } from '@/lib/prisma';
import {
  NextApiRequest,
  NextApiResponse,
} from 'next';

export default async function patch(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { id: uid, inside, outside, storeId, toiletType, Seat } = req.body;
    if (!uid || !inside || !outside || !storeId || !toiletType || !Seat) {
      return res
        .status(400)
        .json({ status: 'error', error: 'Toilet Data not provided' });
    }
    const toilet = await db.toilet.update({
      where: {
        id: uid,
      },
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
