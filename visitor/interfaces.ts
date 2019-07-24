export interface Visitor {
    forOrg1(org: object): void
    forOrg2(org: object): void
}

export interface Org {
    accept(v: Visitor): void;
}