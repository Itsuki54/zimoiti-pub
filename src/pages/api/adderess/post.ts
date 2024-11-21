import { db } from '@/lib/prisma';
import { connect } from 'http2';
import {
  NextApiRequest,
  NextApiResponse,
} from 'next';

export default async function post(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { street, city, state, zip, storeId } = req.body;
    if (!street || !city || !state || !zip || !storeId) {
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
        .json({ status: 'error', error: 'Store not provided' });
    }

    const address = await db.address.create({
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
