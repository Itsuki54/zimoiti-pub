import { db } from '@/lib/prisma';
import {
  NextApiRequest,
  NextApiResponse,
} from 'next';

export default async function get(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { id: parkingId } = req.query;
    if (!parkingId) {
      return res
        .status(400)
        .json({ status: 'error', error: 'Parking ID not provided' });
    }
    const parking = await db.parking.findUnique({
      where: {
        id: parkingId.toString(),
      },
      include: {
        time: true,
      },
    });
    if (!parking) {
      return res
        .status(404)
        .json({ status: 'error', error: 'Parking not found' });
    }
    return res.status(200).json({ status: 'success', data: parking });
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
