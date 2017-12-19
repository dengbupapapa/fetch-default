'use strict';

var oldFetch = fetch;
var u_p = '';
var opt = {};

window.fetch = function (uri) {
    for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        rest[_key - 1] = arguments[_key];
    }

    return oldFetch(u_p + uri, Object.assign.apply(Object, [{}, opt].concat(rest)));
};

fetch.default = function (option) {

    if (Object.prototype.toString.call(option) != '[object Object]') throw new Error('option is object!');
    if (Object.prototype.toString.call(option.uriPrefix) != '[object String]') throw new Error('option is string!');

    u_p = option.uriPrefix;
    opt = option;
};