"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.camelToKebabCase = void 0;
var replaceCallback = function (char) { return "-".concat(char.toLowerCase()); };
var camelToKebabCase = function (value) {
    return value.replace(/[A-Z]/g, replaceCallback);
};
exports.camelToKebabCase = camelToKebabCase;
