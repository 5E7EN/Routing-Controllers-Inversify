import 'reflect-metadata';
import { Container } from 'inversify';
import { createExpressServer, useContainer } from 'routing-controllers';
import path from 'path';

import { bindings } from './config/ioc';
import { InversifyAdapter } from './/config/inversify-adapter';

(async () => {
    // Create a new Inversify container and load its bindings (async for database and stuff)
    const container = new Container();
    await container.loadAsync(bindings);
    const inversifyAdapter = new InversifyAdapter(container);

    useContainer(inversifyAdapter);

    // Create express app, registering all controller routes, middlewares, and interceptors
    const app = createExpressServer({
        controllers: [path.join(__dirname + '/controllers/**/*{.ts,.js}')],
        middlewares: [path.join(__dirname + '/middlewares/**/*{.ts,.js}')],
        interceptors: [path.join(__dirname + '/interceptors/**/*{.ts,.js}')]
    });

    // Run express application on port 9999
    app.listen(9999, () => console.log('Here for your enjoyment'));
})();
