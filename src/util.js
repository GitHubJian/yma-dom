function isArrayLike(obj) {
    if (obj && typeof obj === 'object') {
        let length = obj.length;

        return (
            typeof length === 'number' &&
            length >= 0 &&
            Number.isInteger(length)
        );
    }

    return false;
}

function each(obj, callback) {
    let length;
    let i = 0;

    if (isArrayLike(obj)) {
        length = obj.length;
        for (; i < length; i++) {
            if (callback.call(obj[i], i, obj[i]) === false) {
                break;
            }
        }
    } else {
        for (i in obj) {
            if (callback.call(obj[i], i, obj[i]) === false) {
                break;
            }
        }
    }

    return obj;
}

function hyphenate(str) {
    let re = /\B([A-Z])/g;

    return str.replace(re, '-$1').toLowerCase();
}

module.exports = {
    isArrayLike,
    each,
    hyphenate,
};
