import { BaseResponse } from './BaseResponse';

export class ErrorResponse extends BaseResponse {
    constructor(private message: string, public statusCode: number = 500) {
        super(statusCode);
    }

    public format() {
        return {
            status: 'error',
            message: this.message
        };
    }
}
