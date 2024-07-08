function addClass(el, classname) {
    if (typeof classname === 'undefined') {
        return el;
    }

    const classes = classname.split(' ');
    for (let i = 0; i < classes.length; i++) {
        if (typeof el !== 'undefined' && typeof el.classList !== 'undefined') {
            el.classList.add(classes[i]);
        }
    }

    return el;
}
exports.addClass = addClass;

function removeClass(el, classname) {
    const classes = classname.split(' ');
    for (let i = 0; i < classes.length; i++) {
        if (typeof el !== 'undefined' && typeof el.classList !== 'undefined') {
            el.classList.remove(classes[i]);
        }
    }

    return el;
}
exports.removeClass = removeClass;

function hasClass(el, classname) {
    if (!el) {
        return false;
    }

    return el.classList.contains(classname);
}
exports.hasClass = hasClass;

function toggleClass(el, classname) {
    const classes = classname.split(' ');
    for (let i = 0; i < classes.length; i++) {
        if (typeof el !== 'undefined' && typeof el.classList !== 'undefined') {
            el.classList.toggle(classes[i]);
        }
    }

    return el;
}
exports.toggleClass = toggleClass;
