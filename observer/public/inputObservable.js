"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Input = /** @class */ (function () {
    function Input() {
        this.subscribers = [];
    }
    Input.prototype.subscribe = function (o) {
        this.subscribers.push(o);
    };
    Input.prototype.unsubscribe = function (o) {
        this.subscribers = this.subscribers.filter(function (s) { return s !== o; });
    };
    Input.prototype.notify = function (p) {
        this.subscribers.forEach(function (s) { return s.update(p); });
    };
    return Input;
}());
exports.Input = Input;
