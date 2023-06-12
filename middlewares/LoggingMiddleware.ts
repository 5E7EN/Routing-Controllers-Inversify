import { injectable } from 'inversify';
import { Middleware, ExpressMiddlewareInterface } from 'routing-controllers';
import { Request, Response, NextFunction } from 'express';

@Middleware({ type: 'before' })
@injectable()
export class LoggingMiddleware implements ExpressMiddlewareInterface {
    use(request: Request, response: Response, next: NextFunction): void {
        console.log('flippin logged shiz:', request.url);

        next();
    }
}
