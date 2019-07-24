export interface Handler {
    setNext(handler: Handler): Handler;
    handle(type: string): object;
}
