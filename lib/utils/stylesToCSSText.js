"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stylesToCSSText = void 0;
var camelToKebabCase_1 = require("./camelToKebabCase");
var validateSelector_1 = require("./validateSelector");
var stylesToCSSText = function (selector, styles, importantAll, media) {
    if (!(0, validateSelector_1.validateSelector)(selector)) {
        throw new DOMException("'".concat(selector, "' is not a valid selector."));
    }
    var rows = Object.entries(styles).map(function (_a) {
        var key = _a[0], value = _a[1];
        var rowValue = "".concat((0, camelToKebabCase_1.camelToKebabCase)(key), ":").concat(value);
        if (importantAll && !rowValue.endsWith('!important')) {
            rowValue += '!important';
        }
        return rowValue;
    });
    var cssText = "".concat(selector, "{").concat(rows.join(';'), "}");
    return media ? "@media ".concat(media, "{").concat(cssText, "}") : cssText;
};
exports.stylesToCSSText = stylesToCSSText;
