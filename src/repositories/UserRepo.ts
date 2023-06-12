import { injectable } from 'inversify';

export interface IUser {
    id: number;
    name: string;
}

@injectable()
export class UserRepo {
    private users: IUser[];

    constructor() {
        this.users = [
            { id: 1, name: 'ms' },
            { id: 2, name: 'sm' }
        ];
    }

    public getUserById(id: number): IUser | null {
        console.log('User repo here to feed you small data');

        const targetUser = this.users.find((user) => user.id === id) || null;
        return targetUser;
    }

    public getUsers(): IUser[] {
        console.log('User repo here to feed you big data');
        return this.users;
    }
}
