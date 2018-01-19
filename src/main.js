import browser from './browser';

import licai from './licai';

// ......其他自定义

const ua = window.navigator.userAgent;

export default Object.assign({
    ua
}, browser(ua), {
    licai: licai(ua),
    updateLicai(ua) {
        return licai(ua || window.navigator.userAgent);
    }
});