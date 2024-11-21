import { db } from '@/lib/prisma';
import {
  NextApiRequest,
  NextApiResponse,
} from 'next';

export default async function get(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { id } = req.query;
    if (!id) {
      return res
        .status(400)
        .json({ status: 'error', error: 'User ID not provided' });
    }
    const menu = await db.menu.findMany({
      where: {
        storeId: id.toString(),
      },
    });
    if (!menu) {
      return res.status(404).json({ status: 'error', error: 'User not found' });
    }
    return res.status(200).json({ status: 'success', data: menu });
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
