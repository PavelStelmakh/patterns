import { Manager } from './manager';
import { Worker1 } from './worker1';
import { Worker2 } from './worker2';

const w1 = new Worker1();
const w2 = new Worker2();
const m = new Manager();

m.notify({ name: w1.name, request: 'SALARY' });
m.notify({ name: w2.name, request: 'LOCATION' });
