"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Organization1 = /** @class */ (function () {
    function Organization1() {
        this.money = 123;
    }
    Organization1.prototype.doSmth1 = function () { };
    Organization1.prototype.doSmth2 = function () { };
    Organization1.prototype.accept = function (v) {
        v.forOrg1(this);
    };
    return Organization1;
}());
exports.Organization1 = Organization1;
