import { injectable } from 'inversify';
import { Interceptor, InterceptorInterface, Action } from 'routing-controllers';

import { BaseResponse } from '../responses';

@Interceptor()
@injectable()
export class ResponseInterceptor implements InterceptorInterface {
    intercept(action: Action, content: any) {
        if (content instanceof BaseResponse) {
            const status = content.statusCode;
            const response = content.format();

            console.log('VOILA!');
            console.log(response);

            // Set status code
            action.response.status(status);
            return response;
        } else {
            console.log('intersnepted some cool regular content:', content);
        }

        return content;
    }
}
