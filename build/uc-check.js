(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.UC = factory());
}(this, (function () { 'use strict';

function common (ua) {
    return {
        isChrome: /Chrome\/[\S]{1,}/i.test(ua),
        isFirefix: /Firefox\/[\S]{1,}/i.test(ua),
        isMobile: /(iphone|ipod|((?:android)?.*?mobile)|blackberry|nokia)/i.test(ua),
        isOpera: /opera.*\Wpresto\W/i.test(ua),
        isSafari: /webkit\W(?!.*chrome).*safari\W/i.test(ua),
        isTablet: /(ipad|android(?!.*mobile)|tablet)/i.test(ua),
        isTV: /googletv|sonydtv/i.test(ua),
        isWebKit: /webkit\W/i.test(ua),
        isAndroid: /android [\S]{1,}/i.test(ua),
        isIOS: /(ipad|iphone|ipod)/i.test(ua),
        isIPad: /ipad/i.test(ua),
        isIPhone: /iphone/i.test(ua),
        isIPod: /ipod/i.test(ua),
        isWeChat: /MicroMessenger/i.test(ua),
        isIe: /\bTrident\b/i.test(ua)
    };
}

function licai (ua) {
    var getResult = function (reg) {
        var result = reg.exec(ua);
        return !result ? [] : result[0].split('/');
    };

    var LuLuYouSDK = getResult(/LuLuYouSDK\/[\S]{1,}/i);
    var LuLuYouVersion = getResult(/LuLuYouVersion\/[\S]{1,}/i);
    var LuLuYouChannel = getResult(/LuLuYouChannel\/[\S]{1,}/i);
    var LuLuYouApp = getResult(/LuLuYouApp\/[\S]{1,}/i);

    return {
        LuLuYouSDK: LuLuYouSDK,
        LuLuYouVersion: LuLuYouVersion,
        LuLuYouChannel: LuLuYouChannel,
        LuLuYouApp: LuLuYouApp
    };
}

// ......其他自定义


var testUa = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.35555 LuLuYouSDK/1.00-2_3 LuLuYouVersion/10 LuLuYouChannel/appstoreAppStore LuLuYouApp/LiCai';

var ua = navigator.userAgent;

var main = Object.assign({}, common(testUa), {
    licai: licai(testUa)
});

return main;

})));
