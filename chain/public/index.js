"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var handlers_1 = require("./handlers");
var log = new handlers_1.Log;
var permission = new handlers_1.Permission;
var data = new handlers_1.DataManager;
log.setNext(permission).setNext(data);
var logic = function (handler) {
    console.log(handler.handle('GET'));
    console.log();
    console.log(handler.handle('POST'));
};
logic(log);
