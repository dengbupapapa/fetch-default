'use strict';

var oldFetch = fetch;
var u_p = '';

window.fetch = function(uri) {
    for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        rest[_key - 1] = arguments[_key];
    }

    return oldFetch(u_p + uri, rest);
};

fetch['default'] = function(_ref) {
    var uriPrefix = _ref.uriPrefix;

    u_p = uriPrefix;
};