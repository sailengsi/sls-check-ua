export default function (ua) {
    const getResult = function (reg) {
        const result = (reg).exec(ua);
        return !result ? [] : result[0].split('/');
    };


    const LuLuYouSDK = getResult(/LuLuYouSDK\/[\S]{1,}/i);
    const LuLuYouVersion = getResult(/LuLuYouVersion\/[\S]{1,}/i);
    const LuLuYouChannel = getResult(/LuLuYouChannel\/[\S]{1,}/i);
    const LuLuYouApp = getResult(/LuLuYouApp\/[\S]{1,}/i);


    return {
        LuLuYouSDK,
        LuLuYouVersion,
        LuLuYouChannel,
        LuLuYouApp
    };
}

