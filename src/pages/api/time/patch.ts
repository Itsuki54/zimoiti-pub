import { db } from '@/lib/prisma';
import {
  NextApiRequest,
  NextApiResponse,
} from 'next';

export default async function patch(req: NextApiRequest, res: NextApiResponse) {
  try {
    const {
      id: uid,
      day,
      open,
      close,
      tag,
      storeId,
      parkingId,
      reserve,
    } = req.body;
    if (!uid || !day || !open || !close || !tag || !storeId) {
      return res
        .status(400)
        .json({ status: 'error', error: 'Time Data not provided' });
    }
    const time = await db.time.update({
      where: {
        id: uid,
      },
      data: {
        day,
        open,
        close,
        tag,
        storeId,
        parkingId,
        reserve,
      },
    });
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
