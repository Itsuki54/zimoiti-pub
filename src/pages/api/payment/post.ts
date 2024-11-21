import { db } from '@/lib/prisma';
import {
  NextApiRequest,
  NextApiResponse,
} from 'next';

export default async function post(req: NextApiRequest, res: NextApiResponse) {
  try {
    const {
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
      storeId,
    } = req.body;
    if (
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
      !storeId
    ) {
      console.log(req.body);
      return res
        .status(400)
        .json({ status: 'error', error: 'Payment Data not provided' });
    }
    const payment = await db.payment.create({
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
