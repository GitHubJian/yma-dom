function getAttr(el, attr) {
    if (el) {
        return el.getAttribute(attr);
    }

    return undefined;
}
exports.getAttr = getAttr;

function setAttr(el, attr, value) {
    const args = Array.prototype.slice.call(arguments);

    if (args.length === 3) {
        el.setAttribute(attr, value);
    } else {
        for (let attrName in attr) {
            el[attrName] = attr[attrName];
            el.setAttribute(attrName, attr[attrName]);
        }
    }

    return el;
}
exports.setAttr = setAttr;

function removeAttr(el, attr) {
    el.removeAttribute(attr);

    return el;
}
exports.removeAttr = removeAttr;
