export default class UC {

    constructor(ua, prefix) {
        this.isIf = false;
        this.updateUa(ua).updatePrefix(prefix);
    }


    init() {
        console.log('init')
    }


    matchVersion() {
        const vers = /version\/[\d|.]{1,}/i.exec(this.ua);
        if (vers) {
            const versArr = vers[0].split('/');
            return {
                version: versArr[1],
                v: parseInt(versArr[1])
            };
        }
        return {};
    }


    matchVersionByResult(res) {
        if (res) {
            const versArr = res.split(' ');
            return {
                name: versArr[0],
                version: versArr[1],
                v: parseInt(versArr[1])
            };
        }
        return {};
    }


    update(ua, prefix) {
        this.updateUa(ua).updatePrefix(prefix);
        return this;
    }

    updateIsIf(isIf) {
        this.isIf = isIf ? true : false;
    }


    updateUa(ua) {
        if (ua && typeof ua === 'string') {
            this.ua = ua;
        } else {
            this.ua = navigator.userAgent;
        }
        return this;
    }


    updatePrefix(prefix) {
        if (prefix && typeof prefix === 'string') {
            this.prefix = prefix;
        } else {
            this.prefix = '';
        }
        return this;
    }


    getResult(reg, isIf, fn) {
        if (isIf === true || this.isIf === true) {
            return (reg).test(this.ua);
        }
        const result = (reg).exec(this.ua);

        if (!result) {
            return false;
        }

        const customInfo = fn && typeof fn === 'function' ? fn(result) : {};

        const info = result[0].split('/');

        return Object.assign({
            source: result[0],
            name: info[0],
            version: info[1],
            v: parseInt(info[1])
        }, customInfo);
    }


    getCustomResult(reg) {
        const result = (reg).exec(this.ua);

        return result && result[0] ? result[0] : false;
    }


    isIe() {
        return this.getResult(/\bTrident\b/, isIf);
    }

    isChrome(isIf) {
        return this.getResult(/Chrome\/[\S]{1,}/i, isIf);
    }

    isFirefox(isIf) {
        return this.getResult(/Firefox\/[\S]{1,}/i, isIf);
    }

    isMobile() {
        return this.getResult(/(iphone|ipod|((?:android)?.*?mobile)|blackberry|nokia)/i, true);
    }


    isOpera(isIf) {
        return this.getResult(/opera.*\Wpresto\W/i, isIf);
    }

    isSafari(isIf) {
        return this.getResult(/webkit\W(?!.*chrome).*safari\W/i, isIf, (res) => {
            return this.matchVersion(res);
        });
    }


    isTablet(isIf) {
        return this.getResult(/(ipad|android(?!.*mobile)|tablet)/i, isIf, (res) => {
            return this.matchVersion(res);
        });
    }

    isTV(isIf) {
        return this.getResult(/googletv|sonydtv/i, isIf);
    }

    isWebKit() {
        return this.getResult(/webkit\W/i, true);
    }

    isAndroid(isIf) {
        return this.getResult(/android [\S]{1,}/i, isIf, (res) => {
            return this.matchVersionByResult(res[0]);
        });
    }

    isIOS(isIf) {
        return this.getResult(/(ipad|iphone|ipod)/i, isIf, (res) => {
            return this.matchVersion(res);
        });
    }

    isIPad(isIf) {
        return this.getResult(/ipad/i, isIf, (res) => {
            return this.matchVersion(res);
        });
    }

    isIPhone(isIf) {
        return this.getResult(/iphone/i, isIf);
    }

    isIPod(isIf) {
        return this.getResult(/ipod/i, isIf);
    }

    isWeChat(isIf) {
        return this.getResult(/MicroMessenger/i, isIf);
    }


    getCheckCustom(pattern) {
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
    }


    isCheckCustom(str) {
        if (!str || str.constructor !== String) {
            throw new Error('isCheckCustom方法第一个参数不是一个合法的字符串');
            return false;
        }

        const bettewnFlag = this.ua.indexOf(' ' + str + ' ') !== -1,
            firstFlag = this.ua.indexOf(str + ' ') === 0,
            lastFlag = this.ua.indexOf(' ' + str) !== -1 && ( parseInt(this.ua.indexOf(' ' + str)) + parseInt((' ' + str).length) === parseInt(this.ua.length) );

        if ( bettewnFlag || firstFlag || lastFlag ) {
            return true;
        }

        return false;
    }


    getAll() {
        const isChrome = this.isChrome(),
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
            isChrome,
            isFirefix,
            isMobile,
            isOpera,
            isSafari,
            isTablet,
            isTV,
            isWebKit,
            isAndroid,
            isIOS,
            isIPad,
            isIPhone,
            isIPod,
            isWeChat
        };
    }
}