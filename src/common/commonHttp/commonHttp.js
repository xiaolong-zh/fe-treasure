import {forEach as _forEach} from 'lodash';
import Axios from 'axios';
const formatter = (param) => {
    let afterJsonParam = {};
    _forEach(param, (val, key) => {
        let value = typeof val === 'object' ? JSON.stringify(val) : val;
        afterJsonParam[key] = value;
    })
    let query = Object.keys(afterJsonParam).map((key) => {
        return `${key}=${encodeURIComponent(afterJsonParam[key])}`;
    }).join('&');
    return query
}

const httpServer = (opts) => {
    const httpDefaultOpts = { // http默认配置
        method: opts.method,
        baseURL: '', // 测试
        // url: '/api' + opts.url,
        url:opts.url,
        timeout: 50000,
        params: opts.params,
        data: opts.params,
        headers: opts.method === 'get' ? {
            'X-Requested-With': 'XMLHttpRequest',
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
        } : {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    };

    if (opts.method === 'get') {
        delete httpDefaultOpts.data;
    } else {
        delete httpDefaultOpts.params;
    }

    if (opts.method === 'post') {
        httpDefaultOpts.data = formatter(httpDefaultOpts.data);
    }

    const promise = new Promise((resolve, reject) => {
        Axios(httpDefaultOpts).then(
            (res) => {
                if (res.data.code === -3) {
                    resolve(res.data);
                } else {
                    resolve(res.data);
                }
            },
        ).catch(
            (response) => {
                console.log(response);
            },
        );
    });
    return promise;
};

export default httpServer;