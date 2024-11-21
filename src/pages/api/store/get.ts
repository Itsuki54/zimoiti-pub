import { db } from '@/lib/prisma';
import {
  NextApiRequest,
  NextApiResponse,
} from 'next';

export default async function get(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { id } = req.query;
    if (!id) {
      const store = await db.store.findMany({
        include: {
          address: true,
          times: true,
          courses: true,
          parkings: true,
        },
      });
      return res.status(200).json({ status: 'success', data: store });
    }
    const store = await db.store.findUnique({
      where: {
        id: id.toString(),
      },
      include: {
        address: true,
        times: true,
        courses: true,
        parkings: true,
      },
    });
    if (!store) {
      return res
        .status(404)
        .json({ status: 'error', error: 'Store not found' });
    }
    return res.status(200).json({ status: 'success', data: store });
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
