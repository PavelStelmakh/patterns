"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var accountant_1 = require("./accountant");
var director_1 = require("./director");
var Manager = /** @class */ (function () {
    function Manager() {
        this.accountant = new accountant_1.Accountant();
        this.director = new director_1.Director();
    }
    Manager.prototype.notify = function (event) {
        switch (event.request) {
            case 'SALARY':
                this.accountant.salaryUp(event.name);
                break;
            case 'LOCATION':
                this.director.relocation(event.name);
                break;
        }
    };
    return Manager;
}());
exports.Manager = Manager;
