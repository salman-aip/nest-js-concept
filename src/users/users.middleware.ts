import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class UserMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Request......');
    next();
  }
}

// functional middleware
export function DummyFunctionalMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  console.log('Functional Middleware');
  next();
}
