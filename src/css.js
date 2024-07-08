function getCss(el, prop) {
    return win.getComputedStyle(el, null).getPropertyValue(prop);
}
exports.getCss = getCss;

function setCss(el, props) {
    for (const prop in props) {
        el.style[prop] = props[prop];
    }

    return el;
}
exports.setCss = setCss;
