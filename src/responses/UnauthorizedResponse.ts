import { BaseResponse } from './BaseResponse';

export class UnauthorizedResponse extends BaseResponse {
    constructor(public message?: string, public statusCode: number = 401) {
        super(statusCode);
    }

    public format() {
        return {
            status: 'error',
            message: this.message || 'Unauthorized'
        };
    }
}
