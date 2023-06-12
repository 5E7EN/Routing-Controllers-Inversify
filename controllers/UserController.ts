import { Controller, Param, Body, Get, Post, Put, Delete, JsonController } from 'routing-controllers';
import { inject, injectable } from 'inversify';

import { UserRepo } from '../repositories/UserRepo';
import { TYPES } from '../constants';
import { SuccessResponse } from '../responses';
import type { ApiResponse } from '../types/ApiResponse';

@JsonController()
@injectable()
export class UsersController {
    private _userRepo: UserRepo;

    constructor(@inject(TYPES.UserRepo) userRepo: UserRepo) {
        this._userRepo = userRepo;
    }

    @Get('/users')
    getAll() {
        const users = this._userRepo.getUsers();

        return new SuccessResponse(users);
        return users;
        //return 'This action returns all users';
    }

    @Get('/users/:id')
    getOne(@Param('id') id: number): ApiResponse<SuccessResponse<{ message: string }>> {
        //return new ErrorResponse('oopsie');
        //return new UnauthorizedResponse();
        //return { message: 'hi' };
        return new SuccessResponse({ message: 'hi' });
    }

    @Post('/users')
    post(@Body() user: any) {
        return 'Saving user...';
    }

    @Put('/users/:id')
    put(@Param('id') id: number, @Body() user: any) {
        return 'Updating a user...';
    }

    @Delete('/users/:id')
    remove(@Param('id') id: number) {
        return 'Removing user...';
    }
}
