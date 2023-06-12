import { injectable } from 'inversify';

@injectable()
export class UserRepo {
    getUsers() {
        const user = [
            { id: 1, name: 'ms' },
            { id: 2, name: 'sm' }
        ];

        console.log('[UserRepo | getUsers] I am alive!');
        return user;
    }
}
