(function(win) {

    let oldFetch = fetch;

    win.fetch = (uri, ...rest) => {
        //整合所有opts
        let allOpts = Object.assign({}, opt, ...rest, {
            uri: uriPrefix ? (uriPrefix + uri) : uri
        })

        //请求前callback
        if (beforeSend) {
            beforeSend.call(allOpts, Object.assign({}, opt, ...rest));
        }

        let oldFetchPromise = oldFetch(allOpts.uri, allOpts);

        let initFetchPromise = oldFetchPromise;

        if (fail) oldFetchPromise = oldFetchPromise.then((response) => response,(reject) => fail.call(oldFetchPromise,reject));
        if (dataFilter) oldFetchPromise = oldFetchPromise.then((response) => dataFilter.call(oldFetchPromise,response));

        return oldFetchPromise;

    };

    let uriPrefix = '';
    let opt = {};
    let dataFilter;
    let fail;
    let beforeSend;

    fetch.default = (option = {}) => {

        assert(option);

        opt = option;
        uriPrefix = option.uriPrefix || '';
        dataFilter = option.dataFilter;
        fail = option.fail;
        beforeSend = option.beforeSend;

    };

    for (let s in oldFetch) {
        fetch[s] = oldFetch[s];
    }

    function assert(option) {
        if (Object.prototype.toString.call(option) !== '[object Object]') throw new Error('option is object!');
        if (option.uriPrefix && Object.prototype.toString.call(option.uriPrefix) !== '[object String]') throw new Error('uriPrefix is string!');
        if (option.dataFilter && typeof option.dataFilter !== 'function') throw new Error('dataFilter is function!');
        if (option.fail && typeof option.fail !== 'function') throw new Error('fail is function!');
        if (option.beforeSend && typeof option.beforeSend !== 'function') throw new Error('beforeSend is function!');
    }

})(window);