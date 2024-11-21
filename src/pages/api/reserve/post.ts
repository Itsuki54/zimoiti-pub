import { db } from '@/lib/prisma';
import {
  NextApiRequest,
  NextApiResponse,
} from 'next';

export default async function post(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { storeId, phone, email, url, timeId } = req.body;
    if (!storeId || !phone || !email || !url || !timeId) {
      return res
        .status(400)
        .json({ status: 'error', error: 'Reserve Data not provided' });
    }
    const reserve = await db.reserve.create({
      data: {
        storeId,
        phone,
        email,
        url,
        timeId,
      },
    });
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
