import { db } from '@/lib/prisma';
import {
  NextApiRequest,
  NextApiResponse,
} from 'next';

export default async function patch(req: NextApiRequest, res: NextApiResponse) {
  try {
    const {
      id: paymentId,
      card,
      cash,
      QR,
      transit,
      IDPay,
      QuickPay,
      Nanaco,
      Edy,
      WAON,
      Pitapa,
      UNIONPAY,
      storeId,
    } = req.body;
    if (
      !paymentId ||
      card === undefined ||
      cash === undefined ||
      QR === undefined ||
      transit === undefined ||
      IDPay === undefined ||
      QuickPay === undefined ||
      Nanaco === undefined ||
      Edy === undefined ||
      WAON === undefined ||
      Pitapa === undefined ||
      UNIONPAY === undefined ||
      !storeId
    ) {
      return res
        .status(400)
        .json({ status: 'error', error: 'Payment Data not provided' });
    }
    const payment = await db.payment.update({
      where: {
        id: paymentId,
      },
      data: {
        card,
        cash,
        QR,
        transit,
        IDPay,
        QuickPay,
        Nanaco,
        Edy,
        WAON,
        Pitapa,
        UNIONPAY,
        storeId,
      },
    });
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
