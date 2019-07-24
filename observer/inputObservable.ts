import { Observable, Observer, Profile } from './interfaces';

export class Input implements Observable {
    subscribers: Observer[] = [];

    subscribe(o: Observer): void {
        this.subscribers.push(o);
    }

    unsubscribe(o: Observer): void {
        this.subscribers = this.subscribers.filter(s => s !== o);
    }

    notify(p: Profile): void {
        this.subscribers.forEach(s => s.update(p));
    }
}
