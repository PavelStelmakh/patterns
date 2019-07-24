import { Command } from './interfaces';

export class Invoker {
    doSmth(c: Command) {
        c.execute();
    }
}
