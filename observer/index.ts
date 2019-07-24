import { Input } from './inputObservable';
import { Header, Log } from './observers';
import { Profile } from './interfaces';

const p: Profile = {
    name: 'Vova',
};

const input = new Input;
const log = new Log;
const header = new Header;

input.subscribe(log);
input.subscribe(header);

input.notify(p);

p.name = 'Ne Vova';

input.unsubscribe(log);

input.notify(p);
