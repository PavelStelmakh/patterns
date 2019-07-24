"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Header = /** @class */ (function () {
    function Header() {
    }
    Header.prototype.update = function (p) {
        console.log("display in header: " + p.name);
    };
    return Header;
}());
exports.Header = Header;
var Log = /** @class */ (function () {
    function Log() {
    }
    Log.prototype.update = function (p) {
        console.log("logging change: " + p.name);
    };
    return Log;
}());
exports.Log = Log;
