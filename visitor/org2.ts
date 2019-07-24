import { Org, Visitor } from './interfaces';

export class Organization2 implements Org {
    money: number = 0
    doSmth1() {}
    doSmth2() {}

    accept(v: Visitor) {
        v.forOrg2(this);
    }
}
