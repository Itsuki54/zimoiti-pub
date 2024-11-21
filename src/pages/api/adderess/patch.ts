import { db } from '@/lib/prisma';
import {
  NextApiRequest,
  NextApiResponse,
} from 'next';

export default async function patch(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { id: uid, street, city, state, zip, storeId } = req.body;
    if (!uid || !street || !city || !state || !zip || !storeId) {
      return res
        .status(400)
        .json({ status: 'error', error: 'User Data not provided' });
    }
    const Store = await db.store.findUnique({
      where: {
        id: storeId,
      },
    });
    if (!Store) {
      return res
        .status(400)
        .json({ status: 'error', error: 'Storenot provided' });
    }
    const address = await db.address.update({
      where: {
        id: uid,
      },
      data: {
        street,
        city,
        state,
        zip,
        Store: {
          connect: {
            id: storeId,
          },
        },
      },
    });
    return res.status(200).json({ status: 'success', data: address });
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
