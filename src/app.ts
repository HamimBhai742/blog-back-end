import express, { Request, Response } from 'express';
import 'dotenv/config';
import { router } from './routes/routes';
import { notFound } from './middleware/not.found';
export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', router);

app.get('/', (req: Request, res: Response) => {
  res.send('Blog Back-End Server is running!');
});

app.use(notFound);
