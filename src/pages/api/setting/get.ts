import { db } from '@/lib/prisma';
import {
  NextApiRequest,
  NextApiResponse,
} from 'next';

export default async function get(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { id: settingId } = req.body;
    if (!settingId) {
      return res
        .status(400)
        .json({ status: 'error', error: 'Setting ID not provided' });
    }
    const setting = await db.setting.findUnique({
      where: {
        id: settingId,
      },
    });
    if (!setting) {
      return res
        .status(404)
        .json({ status: 'error', error: 'Setting not found' });
    }
    return res.status(200).json({ status: 'success', data: setting });
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
