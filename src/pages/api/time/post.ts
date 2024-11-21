import { db } from '@/lib/prisma';
import {
  NextApiRequest,
  NextApiResponse,
} from 'next';

export default async function post(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { day, open, close, tag, price, storeId, parkingId, reserve } = req.body;
    if ((!day || !open || !close) && !storeId && !parkingId) {
      return res
        .status(400)
        .json({ status: 'error', error: 'Time Data not provided' });
    }
    if (parkingId) {
      const time = await db.time.create({
        data: {
          day,
          open,
          close,
          price,
          Parking: {
            connect: {
              id: parkingId,
            },
          },
        },
      });
      return res.status(200).json({ status: 'success', data: time });
    }
    else if (storeId) {
      const time = await db.time.create({
        data: {
          day,
          open,
          close,
          price,
          tag,
          reserve,
          Store: {
            connect: {
              id: storeId,
            },
          },
        },
      });
      return res.status(200).json({ status: 'success', data: time });
    }
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
