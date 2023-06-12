import { BaseResponse } from './BaseResponse';

export class SuccessResponse<T> extends BaseResponse {
    constructor(public data: T, public statusCode: number = 200) {
        super(statusCode);
    }

    public format() {
        return {
            status: 'success',
            data: this.data
        };
    }
}
