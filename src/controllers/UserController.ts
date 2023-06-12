import { JsonController, Param, Get } from 'routing-controllers';
import { inject, injectable } from 'inversify';

import { IUser, UserRepo } from '../repositories/UserRepo';
import { TYPES } from '../constants';
import { ErrorResponse, SuccessResponse } from '../responses';
import type { ApiResponse } from '../types/ApiResponse';

@JsonController()
@injectable()
export class UsersController {
    private _userRepo: UserRepo;

    constructor(@inject(TYPES.UserRepo) userRepo: UserRepo) {
        this._userRepo = userRepo;
    }

    @Get('/users')
    getAll(): ApiResponse<SuccessResponse<{ users: IUser[] }>> {
        try {
            const users = this._userRepo.getUsers();

            return new SuccessResponse({ users });
        } catch (error) {
            return new ErrorResponse('Uh oh spaghetti');
        }
    }

    @Get('/users/:id')
    getOne(@Param('id') id: number): ApiResponse<SuccessResponse<{ user: IUser }>> {
        try {
            const user = this._userRepo.getUserById(id);

            if (user) {
                return new SuccessResponse({ user });
            } else {
                return new ErrorResponse('User not found', 404);
            }
        } catch (error) {
            return new ErrorResponse('Uh oh spaghetti');
        }
    }
}
