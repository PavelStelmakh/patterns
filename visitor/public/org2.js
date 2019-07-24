"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Organization2 = /** @class */ (function () {
    function Organization2() {
        this.money = 0;
    }
    Organization2.prototype.doSmth1 = function () { };
    Organization2.prototype.doSmth2 = function () { };
    Organization2.prototype.accept = function (v) {
        v.forOrg2(this);
    };
    return Organization2;
}());
exports.Organization2 = Organization2;
