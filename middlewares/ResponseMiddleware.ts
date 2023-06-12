import { injectable } from 'inversify';
import { Middleware, ExpressMiddlewareInterface } from 'routing-controllers';
import { Request, Response, NextFunction } from 'express';

@Middleware({ type: 'after' })
@injectable()
export class ResponseMiddleware implements ExpressMiddlewareInterface {
    use(request: Request, response: Response, next: NextFunction): void {
        //console.log('flippin logged shiz after the fecht:', response.locals.response);

        next();
    }
}
