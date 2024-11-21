import { db } from '@/lib/prisma';
import {
  NextApiRequest,
  NextApiResponse,
} from 'next';

export default async function post(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { gender, wayou, washlet, toiletId } = req.body;
    if (!gender || !wayou || !washlet || !toiletId) {
      return res
        .status(400)
        .json({ status: 'error', error: 'ToiletType Data not provided' });
    }
    const type = await db.toiletType.create({
      data: {
        gender,
        wayou,
        washlet,
        toiletId,
      },
    });
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
