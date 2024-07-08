function on(el, event, handler) {
    if (el && event && handler) {
        if (document.addEventListener) {
            el.addEventListener(event, handler, false);
        } else {
            el.attachEvent('on' + event, handler);
        }
    }
}
exports.on = on;

function off(el, event, handler) {
    if (el && event) {
        if (document.removeEventListener) {
            el.removeEventListener(event, handler, false);
        } else {
            el.detachEvent('on' + event, handler);
        }
    }
}
exports.off = off;

function once(el, event, fn) {
    var listener = function () {
        if (fn) {
            fn.apply(this, arguments);
        }
        off(el, event, listener);
    };

    on(el, event, listener);
}
exports.once = once;
