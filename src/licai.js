import getResult from './getResult';

export default function (ua) {

    const LuLuYouSDK = getResult({
        reg: /LuLuYouSDK\/[\S]{1,}/i,
        ua,
    });
    const LuLuYouVersion = getResult({
        reg: /LuLuYouVersion\/[\S]{1,}/i,
        ua
    });
    const LuLuYouChannel = getResult({
        reg: /LuLuYouChannel\/[\S]{1,}/i,
        ua
    });
    const LuLuYouApp = getResult({
        reg: /LuLuYouApp\/[\S]{1,}/i,
        ua
    });

    return {
        LuLuYouSDK,
        LuLuYouVersion,
        LuLuYouChannel,
        LuLuYouApp
    };
}

