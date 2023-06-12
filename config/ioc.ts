import inversify, { AsyncContainerModule } from 'inversify';

import { DatabaseService } from '../services/DatabaseService';
import { UserRepo } from '../repositories/UserRepo';
import { UsersController } from '../controllers/UserController';

import { TYPES } from '../constants';

export const bindings = new AsyncContainerModule(async (bind: inversify.interfaces.Bind) => {
    // Configure and connect database
    const databaseService = new DatabaseService();
    await databaseService.establishConnection();

    // Bind databases
    bind<DatabaseService>(TYPES.DatabaseService).toConstantValue(databaseService);

    // Bind repos
    bind<UserRepo>(TYPES.UserRepo).to(UserRepo).inSingletonScope();

    // Bind controllers
    bind<UsersController>(TYPES.UsersController).to(UsersController).inSingletonScope();

    console.log('Finished loading all bindings');
});
