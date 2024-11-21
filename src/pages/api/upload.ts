import formidable from 'formidable';
import { createWriteStream } from 'fs';
import type {
  NextApiRequest,
  NextApiResponse,
} from 'next';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== 'POST') return res.status(405).end();
    let paths: string[] = [];
    const form = formidable({ multiples: true, uploadDir: __dirname });
    form.parse(req, (err, fields, files) => {
      if (err) {
        res.status(500).json({ status: 'error', error: err });
        return;
      }
      res.status(200).json({ status: 'success', data: paths });
    });
    form.onPart = part => {
      if (part.originalFilename === '' || !part.mimetype) {
        form._handlePart(part);
      }
      else if (part.originalFilename) {
        let path = `./public/images/uploads/${new Date().getTime()}-${part.originalFilename}`;
        const stream = createWriteStream(path);
        part.pipe(stream);
        part.on('end', () => {
          console.log(part + ' is uploaded');
          stream.close();
          paths.push(path);
        });
        part.on('error', err => {
          console.log(err);
          res.status(500).json({ status: 'error', error: err });
        });
      }
    };
  }
  catch (e) {
    console.error(e);
    if (e instanceof Error) {
      return res.status(500).json({ status: 'error', error: e.message });
    }
    return res
      .status(500)
      .json({ status: 'error', error: 'An error occurred' });
  }
}
