import { injectable } from 'inversify';

@injectable()
export class DatabaseService {
    async establishConnection(): Promise<void> {
        console.log('Loading database...');

        await new Promise((resolve) => setTimeout(resolve, 1000));

        console.log('Connected! (for fake)');

        return;
    }
}
