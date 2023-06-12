import 'reflect-metadata';
import { Container } from 'inversify';
import { createExpressServer, useContainer } from 'routing-controllers';
import path from 'path';

import { bindings } from './config/ioc';
import { InversifyAdapter } from './/config/inversify-adapter';

(async () => {
    // Create a new Inversify container and load its bindings
    const container = new Container();
    await container.loadAsync(bindings);
    const inversifyAdapter = new InversifyAdapter(container);

    useContainer(inversifyAdapter);

    // creates express app, registers all controller routes and returns you express app instance
    const app = createExpressServer({
        controllers: [path.join(__dirname + '/controllers/**/*{.ts,.js}')],
        middlewares: [path.join(__dirname + '/middlewares/**/*{.ts,.js}')],
        interceptors: [path.join(__dirname + '/interceptors/**/*{.ts,.js}')]
    });

    // run express application on port 3000
    app.listen(9999, () => console.log('listening'));
})();
