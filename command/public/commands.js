"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SetNameCommand = /** @class */ (function () {
    function SetNameCommand(r, name) {
        this.name = name;
        this.receiver = r;
    }
    SetNameCommand.prototype.execute = function () {
        this.receiver.setName(this.name);
    };
    return SetNameCommand;
}());
exports.SetNameCommand = SetNameCommand;
var SetDesCommand = /** @class */ (function () {
    function SetDesCommand(r, d) {
        this.description = d;
        this.receiver = r;
    }
    SetDesCommand.prototype.execute = function () {
        this.receiver.setDescription(this.description);
    };
    return SetDesCommand;
}());
exports.SetDesCommand = SetDesCommand;
