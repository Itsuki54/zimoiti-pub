import { db } from '@/lib/prisma';
import {
  NextApiRequest,
  NextApiResponse,
} from 'next';

export default async function remove(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const { id: paymentId } = req.body;
    if (!paymentId) {
      return res
        .status(400)
        .json({ status: 'error', error: 'Payment ID not provided' });
    }
    await db.payment.delete({
      where: {
        id: paymentId,
      },
    });
    return res.status(200).json({ status: 'success' });
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
