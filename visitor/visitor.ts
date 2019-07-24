import { Visitor } from './interfaces';

export class Nalogovaia implements Visitor {
    forOrg1(org): void {
        console.log(`money: ${org.money}`);
    }

    forOrg2(org): void {
        console.log(`money: ${org.money}`);
    }
}
