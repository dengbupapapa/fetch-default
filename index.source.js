(function(win) {

    let oldFetch = fetch;
    let oldFetchPromise;

    win.fetch = (uri, ...rest) => {

        oldFetchPromise = oldFetch(uriPrefix ? (uriPrefix + uri) : uri, Object.assign({}, opt, ...rest));

        if (fail) oldFetchPromise = oldFetchPromise.then((response) => response, fail);
        if (dataFilter) oldFetchPromise = oldFetchPromise.then(dataFilter);

        return oldFetchPromise;

    };

    let uriPrefix = '';
    let opt = {};
    let dataFilter;
    let fail;

    fetch.default = (option = {}) => {

        assert(option);

        opt = option;
        uriPrefix = option.uriPrefix || '';
        dataFilter = option.dataFilter;
        fail = option.fail;

    };

    for (let s in oldFetch) {
        fetch[s] = oldFetch[s];
    }

    function assert(option) {
        if (Object.prototype.toString.call(option) !== '[object Object]') throw new Error('option is object!');
        if (option.uriPrefix && Object.prototype.toString.call(option.uriPrefix) !== '[object String]') throw new Error('uriPrefix is string!');
        if (option.dataFilter && typeof option.dataFilter !== 'function') throw new Error('dataFilter is function!');
        if (option.fail && typeof option.fail !== 'function') throw new Error('fail is function!');
    }

})(window);