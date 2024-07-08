const {getAttr, setAttr, removeAttr} = require('./attr');
const classnames = require('./classnames');
const {addClass, removeClass, hasClass, toggleClass} = require('./clazz');
const {getCss, setCss} = require('./css');
const {getData, setData} = require('./data');
const {
    createElement,
    createText,
    createComment,
    insertBefore,
    removeChild,
    appendChild,
    parentNode,
    nextSibling,
    tagName,
} = require('./el');
const {on, off, once} = require('./event');
const {getStyle, setStyle, sty2str} = require('./style');
const {setText} = require('./text');

module.exports = {
    getAttr,
    setAttr,
    removeAttr,
    classnames,
    addClass,
    removeClass,
    hasClass,
    toggleClass,
    getCss,
    setCss,
    getData,
    setData,
    createElement,
    createText,
    createComment,
    insertBefore,
    removeChild,
    appendChild,
    parentNode,
    nextSibling,
    tagName,
    on,
    off,
    once,
    getStyle,
    setStyle,
    sty2str,
    setText,
};
