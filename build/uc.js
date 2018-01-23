(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.UC = factory());
}(this, (function () { 'use strict';

/**
 * 常用浏览器内置类型判断
 * @param  {String} ua 浏览器UA
 * @return {Object}    浏览器检测信息
 */
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

/**
 * 自定义UA检测-理财-跟客户端约定    
 * @param  {String} ua 浏览器UA
 * @return {Object}    自定义UA
 *         Object.LuLuYouSDK
 *         Object.LuLuYouVersion
 *         Object.LuLuYouChannel
 *         Object.LuLuYouApp
 */
function licai (ua) {

    var results = {
        // LuLuYouSDK: false,
        // LuLuYouVersion: false,
        // LuLuYouChannel: false,
        // LuLuYouApp: false
    };

    /**
     * 理财的四个UA正则匹配规则
     * @type {Object}
     */
    var LiCaiRegs = {
        fields: {
            LuLuYouSDK: [/[\s ]LuLuYouSDK\/[\S]{1,}[\s ]/i, /[\s ]LuLuYouSDK\/[\S]{1,}$/i, /^LuLuYouSDK\/[\S]{1,}[\s ]/i],
            LuLuYouVersion: [/[\s ]LuLuYouVersion\/[\S]{1,}[\s ]/i, /[\s ]LuLuYouVersion\/[\S]{1,}$/i, /^LuLuYouVersion\/[\S]{1,}[\s ]/i],
            LuLuYouChannel: [/[\s ]LuLuYouChannel\/[\S]{1,}[\s ]/i, /[\s ]LuLuYouChannel\/[\S]{1,}$/i, /^LuLuYouChannel\/[\S]{1,}[\s ]/i],
            LuLuYouApp: [/[\s ]LuLuYouApp\/[\S]{1,}[\s ]/i, /[\s ]LuLuYouApp\/[\S]{1,}$/i, /^LuLuYouApp\/[\S]{1,}[\s ]/i]
        }
    };

    /**
     * 检测上面定义的UA是否存在，存在返回{key:以斜杠拆分后的数组}，不存在不返回此key
     */
    Object.keys(LiCaiRegs.fields).forEach(function (type) {
        var regs = LiCaiRegs.fields[type];
        for (var i = 0; i < regs.length; i++) {
            var regRes = regs[i].exec(ua);
            if (regRes && regRes[0]) {
                results[type] = regRes[0].replace(/ /g, '').split('/');
                break;
            }
        }
    });

    return results;
}

/**
 * 获取Android版本号
 * @param  {String} ua 浏览器UA
 * @return {Number}    版本号，不存在返回0
 */
function androidVersion (ua) {
	var res = / Android[\s ][\d|.]{1,}/.exec(ua);
	if (res && res[0]) {
		return parseInt(res[0].replace(/ /, '').split(' ')[1]);
	}
	return 0;
}

/**
 * 获取iOS版本
 * @param  {String} ua 浏览器UA
 * @return {Number}    版本号，不存在返回0
 */
function iosVersion (ua) {
	var res = / iPhone OS [\d|_]{1,}/.exec(ua);
	if (res && res[0]) {
		return parseInt(res[0].replace(/ /, '').split(' ')[2].split('_')[0]);
	}
	return 0;
}

// ......其他自定义


var ua = window.navigator.userAgent;

var main = Object.assign({
	ua: ua
}, browser(ua), {
	androidVersion: androidVersion(ua),
	iosVersion: iosVersion(ua)
}, {
	licai: licai(ua),
	updateLicai: function updateLicai(ua) {
		return licai(ua || window.navigator.userAgent);
	}
});

return main;

})));
