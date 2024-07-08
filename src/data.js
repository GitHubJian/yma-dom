function getData(el, key) {
    var dataKey = el.getAttribute('data-' + key);
    if (dataKey) {
        return dataKey;
    }

    return undefined;
}
exports.getData = getData;

function setData(el, key, value) {
    el.setAttribute('data-' + key, value);

    return value;
}
exports.setData = setData;
