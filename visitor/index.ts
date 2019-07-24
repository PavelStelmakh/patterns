import { Organization1 } from './org1';
import { Organization2 } from './org2';
import { Nalogovaia } from './visitor';

const org1 = new Organization1();
const org2 = new Organization2();

const government = new Nalogovaia();

org1.accept(government);
org2.accept(government);
