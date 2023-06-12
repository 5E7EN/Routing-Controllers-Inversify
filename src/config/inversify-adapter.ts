import { IocAdapter } from 'routing-controllers';
import type { Action, ClassConstructor } from 'routing-controllers';
import { Container } from 'inversify';

export class InversifyAdapter implements IocAdapter {
    constructor(private readonly container: Container) {}

    get<T>(someClass: ClassConstructor<T>, action: Action): T {
        const childContainer = this.container.createChild();
        return childContainer.resolve<T>(someClass);
    }
}
