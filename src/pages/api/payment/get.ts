import { db } from '@/lib/prisma';
import {
  NextApiRequest,
  NextApiResponse,
} from 'next';

export default async function get(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { id: paymentId } = req.body;
    if (!paymentId) {
      return res
        .status(400)
        .json({ status: 'error', error: 'Payment ID not provided' });
    }
    const payment = await db.payment.findUnique({
      where: {
        id: paymentId,
      },
    });
    if (!payment) {
      return res
        .status(404)
        .json({ status: 'error', error: 'Payment not found' });
    }
    return res.status(200).json({ status: 'success', data: payment });
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
