import { Handler } from './interfaces';

abstract class AbsHandler implements Handler {
    handler: Handler;

    setNext(handler: Handler): Handler {
        this.handler = handler;
        return handler;
    }

    abstract handle(type: string): object;
}

export class Log extends AbsHandler {
    handle(type: string): object {
        console.log(`logging type: ${type}`);
        return this.handler.handle(type);
    }
}

export class Permission extends AbsHandler {
    handle(type: string): object {
        if (type === 'POST') {
            return { error: 'no no no' };
        } else {
            return this.handler.handle(type);
        }
    }
}

export class DataManager extends AbsHandler {

    handle(_type: string): object {
        return { data: 'data' };
    }
}
