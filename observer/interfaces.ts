export interface Profile {
    name: string;
}

export interface Observer {
    update(p: Profile): void;
}

export interface Observable {
    subscribe(o: Observer): void;
    unsubscribe(o: Observer): void;
    notify(p: Profile): void;
}
