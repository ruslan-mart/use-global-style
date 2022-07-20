import { useImperativeHandle, useLayoutEffect, useRef } from 'react';
import { compareStyles } from '../../utils/compareStyles';
import { stylesToCSSText } from '../../utils/stylesToCSSText';
import { defaultOptions } from './constants';
var styleNode = null;
export var useGlobalStyle = function (selector, styles, options) {
    if (options === void 0) { options = defaultOptions; }
    var _a = options.enabled, enabled = _a === void 0 ? defaultOptions.enabled : _a, _b = options.importantAll, importantAll = _b === void 0 ? defaultOptions.importantAll : _b, media = options.media;
    var selectorValue = Array.isArray(selector) ? selector.join(', ') : selector;
    var mountedRef = useRef(false);
    var stylesRef = useRef(styles);
    var stylesValue = !mountedRef.current || !compareStyles(styles, stylesRef.current) ? styles : stylesRef.current;
    useImperativeHandle(stylesRef, function () { return stylesValue; }, [stylesValue]);
    useLayoutEffect(function () {
        if (styleNode === null) {
            styleNode = document.createElement('style');
            document.head.appendChild(styleNode);
        }
        if (!mountedRef.current) {
            mountedRef.current = true;
        }
    }, []);
    useLayoutEffect(function () {
        if (enabled) {
            var sheet_1 = styleNode.sheet;
            var rule = stylesToCSSText(selectorValue, stylesValue, importantAll, media);
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
