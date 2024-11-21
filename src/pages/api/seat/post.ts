import { db } from '@/lib/prisma';
import {
  NextApiRequest,
  NextApiResponse,
} from 'next';

export default async function post(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { madori, smoking, table, seats, maximum, storeId, toiletId } = req.body;
    if (
      !madori ||
      smoking === undefined ||
      table === undefined ||
      seats === undefined ||
      maximum === undefined ||
      !storeId ||
      !toiletId
    ) {
      return res
        .status(400)
        .json({ status: 'error', error: 'Seat Data not provided' });
    }
    const seat = await db.seat.create({
      data: {
        madori,
        smoking,
        table,
        seats,
        maximum,
        storeId,
        toiletId,
      },
    });
    return res.status(200).json({ status: 'success', data: seat });
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
