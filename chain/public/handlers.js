"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AbsHandler = /** @class */ (function () {
    function AbsHandler() {
    }
    AbsHandler.prototype.setNext = function (handler) {
        this.handler = handler;
        return handler;
    };
    return AbsHandler;
}());
var Log = /** @class */ (function (_super) {
    __extends(Log, _super);
    function Log() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Log.prototype.handle = function (type) {
        console.log("logging type: " + type);
        return this.handler.handle(type);
    };
    return Log;
}(AbsHandler));
exports.Log = Log;
var Permission = /** @class */ (function (_super) {
    __extends(Permission, _super);
    function Permission() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Permission.prototype.handle = function (type) {
        if (type === 'POST') {
            return { error: 'no no no' };
        }
        else {
            return this.handler.handle(type);
        }
    };
    return Permission;
}(AbsHandler));
exports.Permission = Permission;
var DataManager = /** @class */ (function (_super) {
    __extends(DataManager, _super);
    function DataManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DataManager.prototype.handle = function (_type) {
        return { data: 'data' };
    };
    return DataManager;
}(AbsHandler));
exports.DataManager = DataManager;
