import { Injectable, NestMiddleware } from '@nestjs/common';
import { Response, Request, NextFunction } from 'express';

@Injectable()
export class MiddlewareMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log("middleware working ")
    next();
  }
}
