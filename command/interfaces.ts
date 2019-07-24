export interface Command {
    execute(): void;
}

export interface Receiver {
    setName(name: string): void;
    setDescription(d: string): void;
}
