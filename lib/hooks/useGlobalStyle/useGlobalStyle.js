"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGlobalStyle = void 0;
var react_1 = require("react");
var compareStyles_1 = require("../../utils/compareStyles");
var stylesToCSSText_1 = require("../../utils/stylesToCSSText");
var constants_1 = require("./constants");
var styleNode = null;
var useGlobalStyle = function (selector, styles, options) {
    if (options === void 0) { options = constants_1.defaultOptions; }
    var _a = options.enabled, enabled = _a === void 0 ? constants_1.defaultOptions.enabled : _a, _b = options.importantAll, importantAll = _b === void 0 ? constants_1.defaultOptions.importantAll : _b, media = options.media;
    var selectorValue = Array.isArray(selector) ? selector.join(', ') : selector;
    var mountedRef = (0, react_1.useRef)(false);
    var stylesRef = (0, react_1.useRef)(styles);
    var stylesValue = !mountedRef.current || !(0, compareStyles_1.compareStyles)(styles, stylesRef.current) ? styles : stylesRef.current;
    (0, react_1.useImperativeHandle)(stylesRef, function () { return stylesValue; }, [stylesValue]);
    (0, react_1.useLayoutEffect)(function () {
        if (styleNode === null) {
            styleNode = document.createElement('style');
            document.head.appendChild(styleNode);
        }
        if (!mountedRef.current) {
            mountedRef.current = true;
        }
    }, []);
    (0, react_1.useLayoutEffect)(function () {
        if (enabled) {
            var sheet_1 = styleNode.sheet;
            var rule = (0, stylesToCSSText_1.stylesToCSSText)(selectorValue, stylesValue, importantAll, media);
            var index = sheet_1.insertRule(rule, sheet_1.cssRules.length);
            var insertedRuleObject_1 = sheet_1.cssRules[index];
            return function () {
                var currentIndex = Array.prototype.indexOf.call(sheet_1.cssRules, insertedRuleObject_1);
                sheet_1.deleteRule(currentIndex);
            };
        }
        return;
    }, [enabled, importantAll, selectorValue, stylesValue]);
};
exports.useGlobalStyle = useGlobalStyle;
