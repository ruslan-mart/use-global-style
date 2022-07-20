export var validateSelector = function (selector) {
    try {
        document.querySelector(selector);
        return true;
    }
    catch (e) {
        return false;
    }
};
