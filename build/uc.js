(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.UC = factory());
}(this, (function () { 'use strict';

var UC = function UC(ua, prefix) {
    this.isIf = false;
    this.updateUa(ua).updatePrefix(prefix);
};

UC.prototype.init = function init() {
    console.log('init');
};

UC.prototype.matchVersion = function matchVersion() {
    var vers = /version\/[\d|.]{1,}/i.exec(this.ua);
    if (vers) {
        var versArr = vers[0].split('/');
        return {
            version: versArr[1],
            v: parseInt(versArr[1])
        };
    }
    return {};
};

UC.prototype.matchVersionByResult = function matchVersionByResult(res) {
    if (res) {
        var versArr = res.split(' ');
        return {
            name: versArr[0],
            version: versArr[1],
            v: parseInt(versArr[1])
        };
    }
    return {};
};

UC.prototype.update = function update(ua, prefix) {
    this.updateUa(ua).updatePrefix(prefix);
    return this;
};

UC.prototype.updateIsIf = function updateIsIf(isIf) {
    this.isIf = isIf ? true : false;
};

UC.prototype.updateUa = function updateUa(ua) {
    if (ua && typeof ua === 'string') {
        this.ua = ua;
    } else {
        this.ua = navigator.userAgent;
    }
    return this;
};

UC.prototype.updatePrefix = function updatePrefix(prefix) {
    if (prefix && typeof prefix === 'string') {
        this.prefix = prefix;
    } else {
        this.prefix = '';
    }
    return this;
};

UC.prototype.getResult = function getResult(reg, isIf, fn) {
    if (isIf === true || this.isIf === true) {
        return reg.test(this.ua);
    }
    var result = reg.exec(this.ua);

    if (!result) {
        return false;
    }

    var customInfo = fn && typeof fn === 'function' ? fn(result) : {};

    var info = result[0].split('/');

    return Object.assign({
        source: result[0],
        name: info[0],
        version: info[1],
        v: parseInt(info[1])
    }, customInfo);
};

UC.prototype.getCustomResult = function getCustomResult(reg) {
    var result = reg.exec(this.ua);

    return result && result[0] ? result[0] : false;
};

UC.prototype.isIe = function isIe() {
    return this.getResult(/\bTrident\b/, isIf);
};

UC.prototype.isChrome = function isChrome(isIf) {
    return this.getResult(/Chrome\/[\S]{1,}/i, isIf);
};

UC.prototype.isFirefox = function isFirefox(isIf) {
    return this.getResult(/Firefox\/[\S]{1,}/i, isIf);
};

UC.prototype.isMobile = function isMobile() {
    return this.getResult(/(iphone|ipod|((?:android)?.*?mobile)|blackberry|nokia)/i, true);
};

UC.prototype.isOpera = function isOpera(isIf) {
    return this.getResult(/opera.*\Wpresto\W/i, isIf);
};

UC.prototype.isSafari = function isSafari(isIf) {
    var this$1 = this;

    return this.getResult(/webkit\W(?!.*chrome).*safari\W/i, isIf, function (res) {
        return this$1.matchVersion(res);
    });
};

UC.prototype.isTablet = function isTablet(isIf) {
    var this$1 = this;

    return this.getResult(/(ipad|android(?!.*mobile)|tablet)/i, isIf, function (res) {
        return this$1.matchVersion(res);
    });
};

UC.prototype.isTV = function isTV(isIf) {
    return this.getResult(/googletv|sonydtv/i, isIf);
};

UC.prototype.isWebKit = function isWebKit() {
    return this.getResult(/webkit\W/i, true);
};

UC.prototype.isAndroid = function isAndroid(isIf) {
    var this$1 = this;

    return this.getResult(/android [\S]{1,}/i, isIf, function (res) {
        return this$1.matchVersionByResult(res[0]);
    });
};

UC.prototype.isIOS = function isIOS(isIf) {
    var this$1 = this;

    return this.getResult(/(ipad|iphone|ipod)/i, isIf, function (res) {
        return this$1.matchVersion(res);
    });
};

UC.prototype.isIPad = function isIPad(isIf) {
    var this$1 = this;

    return this.getResult(/ipad/i, isIf, function (res) {
        return this$1.matchVersion(res);
    });
};

UC.prototype.isIPhone = function isIPhone(isIf) {
    return this.getResult(/iphone/i, isIf);
};

UC.prototype.isIPod = function isIPod(isIf) {
    return this.getResult(/ipod/i, isIf);
};

UC.prototype.isWeChat = function isWeChat(isIf) {
    return this.getResult(/MicroMessenger/i, isIf);
};

UC.prototype.getCheckCustom = function getCheckCustom(pattern) {
    if (!pattern) {
        throw new Error('isCheckCustom方法第一个参数必填');
        return false;
    }
    if (pattern.constructor !== RegExp) {
        throw new Error('isCheckCustom方法第一个参数不是一个合法的正则表达式');
        return false;
    }
    // console.log(pattern);
    // console.log(typeof pattern);
    // console.log(pattern.constructor===RegExp);
    // return;
    return this.getCustomResult(pattern);
};

UC.prototype.isCheckCustom = function isCheckCustom(str) {
    if (!str || str.constructor !== String) {
        throw new Error('isCheckCustom方法第一个参数不是一个合法的字符串');
        return false;
    }

    var bettewnFlag = this.ua.indexOf(' ' + str + ' ') !== -1,
        firstFlag = this.ua.indexOf(str + ' ') === 0,
        lastFlag = this.ua.indexOf(' ' + str) !== -1 && parseInt(this.ua.indexOf(' ' + str)) + parseInt((' ' + str).length) === parseInt(this.ua.length);

    if (bettewnFlag || firstFlag || lastFlag) {
        return true;
    }

    return false;
};

UC.prototype.getAll = function getAll() {
    var isChrome = this.isChrome(),
        isFirefix = this.isFirefox(),
        isMobile = this.isMobile(),
        isOpera = this.isOpera(),
        isSafari = this.isSafari(),
        isTablet = this.isTablet(),
        isTV = this.isTV(),
        isWebKit = this.isWebKit(),
        isAndroid = this.isAndroid(),
        isIOS = this.isIOS(),
        isIPad = this.isIPad(),
        isIPhone = this.isIPhone(),
        isIPod = this.isIPod(),
        isWeChat = this.isWeChat();
    return {
        isChrome: isChrome,
        isFirefix: isFirefix,
        isMobile: isMobile,
        isOpera: isOpera,
        isSafari: isSafari,
        isTablet: isTablet,
        isTV: isTV,
        isWebKit: isWebKit,
        isAndroid: isAndroid,
        isIOS: isIOS,
        isIPad: isIPad,
        isIPhone: isIPhone,
        isIPod: isIPod,
        isWeChat: isWeChat
    };
};

return UC;

})));
