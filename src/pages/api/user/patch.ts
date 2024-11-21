import { db } from '@/lib/prisma';
import {
  NextApiRequest,
  NextApiResponse,
} from 'next';

export default async function patch(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { id: uid, email, password, isSubscribed, readTutorial } = req.body;
    if (!uid) {
      return res
        .status(400)
        .json({ status: 'error', error: 'User Data not provided' });
    }
    const user = await db.user.update({
      where: {
        id: uid,
      },
      data: {
        email,
        password,
        isSubscribed,
        readTutorial,
      },
    });
    return res.status(200).json({ status: 'success', data: user });
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
