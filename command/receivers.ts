import { Receiver } from './interfaces';

export class Article implements Receiver {
    name: string;
    description: string;

    setName(name: string): void {
        this.name = name;
    }

    setDescription(d: string): void {
        this.description = d;
    }
}
