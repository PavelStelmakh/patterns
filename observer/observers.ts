import { Observer, Profile } from './interfaces';

export class Header implements Observer {
    update(p: Profile): void {
        console.log(`display in header: ${p.name}`);
    }
}

export class Log implements Observer {
    update(p: Profile): void {
        console.log(`logging change: ${p.name}`);
    }
}
