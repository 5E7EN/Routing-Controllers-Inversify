import type { ErrorResponse, UnauthorizedResponse } from '../responses';

export type ApiResponse<T> = T | ErrorResponse | UnauthorizedResponse;
