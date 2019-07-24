import { Command, Receiver } from './interfaces';

export class SetNameCommand implements Command {
    name: string;
    receiver: Receiver;

    constructor(r: Receiver, name: string) {
        this.name = name;
        this.receiver = r;
    }

    execute(): void {
        this.receiver.setName(this.name);
    }
}

export class SetDesCommand implements Command {
    description: string;
    receiver: Receiver;

    constructor(r: Receiver, d: string) {
        this.description = d;
        this.receiver = r;
    }

    execute(): void {
        this.receiver.setDescription(this.description);
    }
}
