import { injectable } from 'inversify';

@injectable()
export class DatabaseService {
    async establishConnection(): Promise<void> {
        console.log('loading db');

        await new Promise((resolve) => setTimeout(resolve, 1000));

        console.log('resolved');

        return;
    }
}
