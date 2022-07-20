export var compareStyles = function (currentStyles, nextStyles) {
    if (currentStyles === nextStyles) {
        return true;
    }
    var currentKeys = Object.keys(currentStyles);
    var nextKeys = Object.keys(nextStyles);
    if (currentKeys.length !== nextKeys.length) {
        return false;
    }
    return currentKeys.every(function (key) { return currentStyles[key] === nextStyles[key]; });
};
