export default function(ua){
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
};