"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inputObservable_1 = require("./inputObservable");
var observers_1 = require("./observers");
var p = {
    name: 'Vova',
};
var input = new inputObservable_1.Input;
var log = new observers_1.Log;
var header = new observers_1.Header;
input.subscribe(log);
input.subscribe(header);
input.notify(p);
p.name = 'Ne Vova';
input.unsubscribe(log);
input.notify(p);
