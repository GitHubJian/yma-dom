const SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g;
const MOZ_HACK_REGEXP = /^moz([A-Z])/;

function camelCase(name) {
    return name
        .replace(SPECIAL_CHARS_REGEXP, function (_, separator, letter, offset) {
            return offset ? letter.toUpperCase() : letter;
        })
        .replace(MOZ_HACK_REGEXP, 'Moz$1');
}

function getStyle(el, stylename) {
    if (!el || !stylename) return null;

    stylename = camelCase(stylename);
    if (stylename === 'float') {
        stylename = 'cssFloat';
    }

    try {
        var computed = document.defaultView.getComputedStyle(el, '');
        return el.style[stylename] || computed ? computed[stylename] : null;
    } catch (e) {
        return el.style[stylename];
    }
}
exports.getStyle = getStyle;

function setStyle(el, stylename, value) {
    if (!el || !stylename) return;

    if (typeof stylename === 'object') {
        for (var prop in stylename) {
            if (stylename.hasOwnProperty(prop)) {
                setStyle(el, prop, stylename[prop]);
            }
        }
    } else {
        stylename = camelCase(stylename);

        el.style[stylename] = value;
    }
}
exports.setStyle = setStyle;

function sty2str(styles) {
    const style = [];

    for (const prop in styles) {
        if (styles.hasOwnProperty(prop)) {
            style.push(prop + ': ' + styles[prop]);
        }
    }

    return style.join('; ');
}
exports.sty2str = sty2str;
