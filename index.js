'use strict';

(function (win) {

    var oldFetch = fetch;
    var oldFetchPromise = void 0;

    win.fetch = function (uri) {
        for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            rest[_key - 1] = arguments[_key];
        }

        oldFetchPromise = oldFetch(uriPrefix ? uriPrefix + uri : uri, Object.assign.apply(Object, [{}, opt].concat(rest)));

        if (fail) oldFetchPromise = oldFetchPromise.then(function (response) {
            return response;
        }, fail);
        if (dataFilter) oldFetchPromise = oldFetchPromise.then(dataFilter);

        return oldFetchPromise;
    };

    var uriPrefix = '';
    var opt = {};
    var dataFilter = void 0;
    var fail = void 0;

    fetch.default = function () {
        var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};


        assert(option);

        opt = option;
        uriPrefix = option.uriPrefix || '';
        dataFilter = option.dataFilter;
        fail = option.fail;
    };

    for (var s in oldFetch) {
        fetch[s] = oldFetch[s];
    }

    function assert(option) {
        if (Object.prototype.toString.call(option) !== '[object Object]') throw new Error('option is object!');
        if (option.uriPrefix && Object.prototype.toString.call(option.uriPrefix) !== '[object String]') throw new Error('uriPrefix is string!');
        if (option.dataFilter && typeof option.dataFilter !== 'function') throw new Error('dataFilter is function!');
        if (option.fail && typeof option.fail !== 'function') throw new Error('fail is function!');
    }
})(window);
