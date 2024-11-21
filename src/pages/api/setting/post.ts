import { db } from '@/lib/prisma';
import {
  NextApiRequest,
  NextApiResponse,
} from 'next';

export default async function post(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { recommned, ownerId } = req.body;
    if (recommned === undefined || !ownerId) {
      return res
        .status(400)
        .json({ status: 'error', error: 'Setting Data not provided' });
    }
    const setting = await db.setting.create({
      data: {
        recommned,
        ownerId,
      },
    });
    return res.status(200).json({ status: 'success', data: setting });
  }
  catch (e) {
    if (e instanceof Error) {
      return res.status(500).json({ status: 'error', error: e.message });
    }
    else return res.status(500).json({ status: 'error', error: e });
  }
}
