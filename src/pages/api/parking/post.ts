import { db } from '@/lib/prisma';
import {
  NextApiRequest,
  NextApiResponse,
} from 'next';

export default async function post(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { inside, outside, capacity, time, storeId } = req.body;
    if (
      inside === undefined ||
      outside === undefined ||
      capacity === undefined ||
      !storeId
    ) {
      return res
        .status(400)
        .json({ status: 'error', error: 'Parking Data not provided' });
    }
    const parking = await db.parking.create({
      data: {
        inside,
        outside,
        capacity,
        time,
        storeId,
      },
    });
    return res.status(200).json({ status: 'success', data: parking });
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