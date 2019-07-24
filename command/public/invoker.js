"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Invoker = /** @class */ (function () {
    function Invoker() {
    }
    Invoker.prototype.doSmth = function (c) {
        c.execute();
    };
    return Invoker;
}());
exports.Invoker = Invoker;
