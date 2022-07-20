"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateSelector = void 0;
var validateSelector = function (selector) {
    try {
        document.querySelector(selector);
        return true;
    }
    catch (e) {
        return false;
    }
};
exports.validateSelector = validateSelector;
