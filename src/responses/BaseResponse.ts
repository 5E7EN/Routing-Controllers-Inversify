export abstract class BaseResponse {
    constructor(public statusCode: number) {}

    abstract format(): object;
}
