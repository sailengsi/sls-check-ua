export default class UC {

    /**
     * 构造函数
     * @param ua    自定义UA
     * @param prefix
     */
    constructor(ua, prefix) {
        this.isIf = false;
        this.updateUa(ua).updatePrefix(prefix);
    }


    /**
     * 暂时没有什么卵用
     */
    init() {
        console.log('init')
    }


    /**
     * 通过UA获取版本号
     * @returns {*}
     */
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


    /**
     * 通过正则匹配到的结果获取版本号
     * @param res   正则匹配到的结果集
     * @returns {*}
     */
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


    /**
     * 更新UA
     * @param ua    UA
     * @param prefix    ===
     * @returns {UC}
     */
    update(ua, prefix) {
        this.updateUa(ua).updatePrefix(prefix);
        return this;
    }


    /**
     * 是否启用全局返回Boolean或者对象
     * @param isIf
     */
    updateIsIf(isIf) {
        this.isIf = isIf ? true : false;
    }


    /**
     * 更新UA
     * @param ua    ua字符串
     * @returns {UC}
     */
    updateUa(ua) {
        if (ua && typeof ua === 'string') {
            this.ua = ua;
        } else {
            this.ua = navigator.userAgent;
        }
        return this;
    }


    /**
     * 更新前缀
     * @param prefix    ===
     * @returns {UC}
     */
    updatePrefix(prefix) {
        if (prefix && typeof prefix === 'string') {
            this.prefix = prefix;
        } else {
            this.prefix = '';
        }
        return this;
    }


    /**
     * 根据正则表达式返回匹配结果
     * @param reg   正则表达式
     * @param isIf  true:成功返回Boolean，否则成功时返回对象
     * @param fn    内部特殊处理
     * @returns {*}
     */
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


    /**
     * 获取自定义UA结果
     * @param reg
     * @returns {boolean}
     */
    getCustomResult(reg) {
        const result = (reg).exec(this.ua);

        return result && result[0] ? result[0] : false;
    }


    /**
     * 是否IE
     * @returns {*}
     */
    isIe() {
        return this.getResult(/\bTrident\b/, isIf);
    }


    /**
     * 是否谷歌
     * @param isIf
     * @returns {*}
     */
    isChrome(isIf) {
        return this.getResult(/Chrome\/[\S]{1,}/i, isIf);
    }


    /**
     * 是否火狐
     * @param isIf
     * @returns {*}
     */
    isFirefox(isIf) {
        return this.getResult(/Firefox\/[\S]{1,}/i, isIf);
    }


    /**
     * 是否手机
     * @returns {*}
     */
    isMobile() {
        return this.getResult(/(iphone|ipod|((?:android)?.*?mobile)|blackberry|nokia)/i, true);
    }


    /**
     * 是否欧朋
     * @param isIf
     * @returns {*}
     */
    isOpera(isIf) {
        return this.getResult(/opera.*\Wpresto\W/i, isIf);
    }


    /**
     * 是否Safari
     * @param isIf
     * @returns {*}
     */
    isSafari(isIf) {
        return this.getResult(/webkit\W(?!.*chrome).*safari\W/i, isIf, (res) => {
            return this.matchVersion(res);
        });
    }


    /**
     * ---
     * @param isIf
     * @returns {*}
     */
    isTablet(isIf) {
        return this.getResult(/(ipad|android(?!.*mobile)|tablet)/i, isIf, (res) => {
            return this.matchVersion(res);
        });
    }


    /**
     * ---
     * @param isIf
     * @returns {*}
     */
    isTV(isIf) {
        return this.getResult(/googletv|sonydtv/i, isIf);
    }


    /**
     * webkit内核
     * @returns {*}
     */
    isWebKit() {
        return this.getResult(/webkit\W/i, true);
    }


    /**
     * 是否安卓
     * @param isIf
     * @returns {*}
     */
    isAndroid(isIf) {
        return this.getResult(/android [\S]{1,}/i, isIf, (res) => {
            return this.matchVersionByResult(res[0]);
        });
    }


    /**
     * 是否iOS
     * @param isIf
     * @returns {*}
     */
    isIOS(isIf) {
        return this.getResult(/(ipad|iphone|ipod)/i, isIf, (res) => {
            return this.matchVersion(res);
        });
    }


    /**
     * 是否iPad
     * @param isIf
     * @returns {*}
     */
    isIPad(isIf) {
        return this.getResult(/ipad/i, isIf, (res) => {
            return this.matchVersion(res);
        });
    }


    /**
     * 是否iPhone
     * @param isIf
     * @returns {*}
     */
    isIPhone(isIf) {
        return this.getResult(/iphone/i, isIf);
    }


    /**
     * 是否iPod
     * @param isIf
     * @returns {*}
     */
    isIPod(isIf) {
        return this.getResult(/ipod/i, isIf);
    }


    /**
     * 是否微信
     * @param isIf
     * @returns {*}
     */
    isWeChat(isIf) {
        return this.getResult(/MicroMessenger/i, isIf);
    }


    /**
     * 获取自定义ua
     * @param pattern
     * @returns {boolean}
     */
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


    /**
     * 检测是否存在指定ua字符串
     * @param str
     * @returns {boolean}
     */
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


    /**
     * 返回全部支持的方法
     * @returns {{isChrome: *, isFirefix: *, isMobile: *, isOpera: *, isSafari: *, isTablet: *, isTV: *, isWebKit: *, isAndroid: *, isIOS: *, isIPad: *, isIPhone: *, isIPod: *, isWeChat: *}}
     */
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