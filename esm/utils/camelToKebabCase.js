var replaceCallback = function (char) { return "-".concat(char.toLowerCase()); };
export var camelToKebabCase = function (value) {
    return value.replace(/[A-Z]/g, replaceCallback);
};
