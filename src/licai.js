/**
 * 自定义UA检测-理财-跟客户端约定    
 * @param  {String} ua 浏览器UA
 * @return {Object}    自定义UA
 *         Object.LuLuYouSDK
 *         Object.LuLuYouVersion
 *         Object.LuLuYouChannel
 *         Object.LuLuYouApp
 */
export default function(ua) {

    const results = {
        // LuLuYouSDK: false,
        // LuLuYouVersion: false,
        // LuLuYouChannel: false,
        // LuLuYouApp: false
    };


    /**
     * 理财的四个UA正则匹配规则
     * @type {Object}
     */
    const LiCaiRegs = {
        fields: {
            LuLuYouSDK: [
                /[\s ]LuLuYouSDK\/[\S]{1,}[\s ]/i,
                /[\s ]LuLuYouSDK\/[\S]{1,}$/i,
                /^LuLuYouSDK\/[\S]{1,}[\s ]/i,
            ],
            LuLuYouVersion: [
                /[\s ]LuLuYouVersion\/[\S]{1,}[\s ]/i,
                /[\s ]LuLuYouVersion\/[\S]{1,}$/i,
                /^LuLuYouVersion\/[\S]{1,}[\s ]/i,
            ],
            LuLuYouChannel: [
                /[\s ]LuLuYouChannel\/[\S]{1,}[\s ]/i,
                /[\s ]LuLuYouChannel\/[\S]{1,}$/i,
                /^LuLuYouChannel\/[\S]{1,}[\s ]/i,
            ],
            LuLuYouApp: [
                /[\s ]LuLuYouApp\/[\S]{1,}[\s ]/i,
                /[\s ]LuLuYouApp\/[\S]{1,}$/i,
                /^LuLuYouApp\/[\S]{1,}[\s ]/i,
            ]
        }
    };


    /**
     * 检测上面定义的UA是否存在，存在返回{key:以斜杠拆分后的数组}，不存在不返回此key
     */
    Object.keys(LiCaiRegs.fields).forEach(type => {
        let regs = LiCaiRegs.fields[type];
        for (var i = 0; i < regs.length; i++) {
            let regRes = (regs[i]).exec(ua);
            if (regRes && regRes[0]) {
                results[type] = regRes[0].replace(/ /g, '').split('/');
                break;
            }
        }
    });


    return results;
}