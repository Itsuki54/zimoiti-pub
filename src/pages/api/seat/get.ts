import { db } from '@/lib/prisma';
import {
  NextApiRequest,
  NextApiResponse,
} from 'next';

export default async function get(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { id: seatId } = req.body;
    if (!seatId) {
      return res
        .status(400)
        .json({ status: 'error', error: 'Seat ID not provided' });
    }
    const seat = await db.seat.findUnique({
      where: {
        id: seatId,
      },
      // include: {
      // store: true,
      // toilet: true
      // }
    });
    if (!seat) {
      return res.status(404).json({ status: 'error', error: 'Seat not found' });
    }
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
