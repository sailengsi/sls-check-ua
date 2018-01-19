(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.UC = factory());
}(this, (function () { 'use strict';

function browser (ua) {
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

function checkStr (str, sourceStr) {
    var bettewnFlag = sourceStr.indexOf(" " + str + " ") !== -1,
        firstFlag = sourceStr.indexOf(str + " ") === 0,
        lastFlag = sourceStr.indexOf(" " + str) !== -1 && parseInt(sourceStr.indexOf(" " + str)) + parseInt((" " + str).length) === parseInt(sourceStr.length);

    return bettewnFlag || firstFlag || lastFlag;
}

function getResult (ref) {
    if (ref === void 0) ref = {};
    var reg = ref.reg;
    var splitStr = ref.splitStr;if (splitStr === void 0) splitStr = '/';
    var ua = ref.ua;

    var result = reg.exec(ua);
    if (!result) {
        return [];
    }

    var str = result[0];

    if (!checkStr(str, ua)) {
        return [];
    }

    return str.split(splitStr);
}

function licai (ua) {

    var LuLuYouSDK = getResult({
        reg: /LuLuYouSDK\/[\S]{1,}/i,
        ua: ua
    });
    var LuLuYouVersion = getResult({
        reg: /LuLuYouVersion\/[\S]{1,}/i,
        ua: ua
    });
    var LuLuYouChannel = getResult({
        reg: /LuLuYouChannel\/[\S]{1,}/i,
        ua: ua
    });
    var LuLuYouApp = getResult({
        reg: /LuLuYouApp\/[\S]{1,}/i,
        ua: ua
    });

    return {
        LuLuYouSDK: LuLuYouSDK,
        LuLuYouVersion: LuLuYouVersion,
        LuLuYouChannel: LuLuYouChannel,
        LuLuYouApp: LuLuYouApp
    };
}

// ......其他自定义

var ua = window.navigator.userAgent;

var main = Object.assign({
    ua: ua
}, browser(ua), {
    licai: licai(ua),
    updateLicai: function updateLicai(ua) {
        return licai(ua || window.navigator.userAgent);
    }
});

return main;

})));
