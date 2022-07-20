import { camelToKebabCase } from './camelToKebabCase';
import { validateSelector } from './validateSelector';
export var stylesToCSSText = function (selector, styles, importantAll, media) {
    if (!validateSelector(selector)) {
        throw new DOMException("'".concat(selector, "' is not a valid selector."));
    }
    var rows = Object.entries(styles).map(function (_a) {
        var key = _a[0], value = _a[1];
        var rowValue = "".concat(camelToKebabCase(key), ":").concat(value);
        if (importantAll && !rowValue.endsWith('!important')) {
            rowValue += '!important';
        }
        return rowValue;
    });
    var cssText = "".concat(selector, "{").concat(rows.join(';'), "}");
    return media ? "@media ".concat(media, "{").concat(cssText, "}") : cssText;
};
