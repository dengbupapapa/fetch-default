
const oldFetch = fetch;
let u_p = '';
let opt = {};

window.fetch = (uri, ...rest) => {
    return oldFetch(u_p + uri, Object.assign({},opt,...rest));
};

fetch.default = (option) => {

    if(Object.prototype.toString.call(option)!='[object Object]')throw  new Error('option is object!')
    if(Object.prototype.toString.call(option.uriPrefix)!='[object String]')throw  new Error('option is string!')

    u_p = option.uriPrefix;
    opt = option;

};