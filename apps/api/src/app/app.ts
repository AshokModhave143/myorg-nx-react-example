/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express, { Request, Response, NextFunction } from 'express';
import * as bodyParser from 'body-parser';
import { router } from './routes';
import { ApplicationError } from './errors';

export const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

const port = process.env.port || 3333;
app.set('port', port);

app.use('/api', router);

app.use(
  (err: ApplicationError, req: Request, res: Response, next: NextFunction) => {
    if (res.headersSent) return next(err);

    return res.status(err.status || 500).json({
      error: process.env.NODE_ENV === 'development' ? err : undefined,
      message: err.message,
    });
  }
);
