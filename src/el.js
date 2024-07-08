const classnames = require('./classnames');
const util = require('./util');

function createElement({tag, attrs, children}) {
    const node = document.createElement(tag || 'div');

    util.each(attrs, function (key, value) {
        node.setAttribute(key, value);
    });

    util.each(children, function (_, child) {
        node.appendChild(child);
    });

    return node;
}
exports.createElement = createElement;

function createText(text) {
    return document.createTextNode(text);
}
exports.createText = createText;

function createComment(text) {
    return document.createComment(text);
}
exports.createComment = createComment;

function insertBefore(parentNode, newNode, referenceNode) {
    parentNode.insertBefore(newNode, referenceNode);
}
exports.insertBefore = insertBefore;

function removeChild(node, child) {
    node.removeChild(child);
}
exports.removeChild = removeChild;

function appendChild(node, child) {
    node.appendChild(child);
}
exports.appendChild = appendChild;

function parentNode(node) {
    return node.parentNode;
}
exports.parentNode = parentNode;

function nextSibling(node) {
    return node.nextSibling;
}
exports.nextSibling = nextSibling;

function tagName(node) {
    return node.tagName;
}
exports.tagName = tagName;
