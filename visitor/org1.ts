import { Org, Visitor } from './interfaces';

export class Organization1 implements Org {
    money: number = 123
    doSmth1() {}
    doSmth2() {}

    accept(v: Visitor) {
        v.forOrg1(this);
    }
}
