const oldFetch = fetch;
let u_p = '';

window.fetch = (uri, ...rest) => {
    return oldFetch(u_p + uri, rest);
};

fetch.default = ({
    uriPrefix
}) => {
    u_p = uriPrefix;
};