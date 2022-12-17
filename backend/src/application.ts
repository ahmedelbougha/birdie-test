import * as express from 'express';
import * as cors from 'cors';
import 'dotenv/config';

import { pingController } from './controllers/ping';
import errorController from './controllers/error';

const app = express();

app.use(pingController);
app.use(cors());
app.use(errorController.notFound);

export default app;
