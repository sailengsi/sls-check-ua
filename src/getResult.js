import checkStr from './check-str';

/**
 * 通过正则表达式返回匹配结果
 * @param reg   正则表达式
 * @param splitStr  匹配出来的结果用此值分割成数组
 * @param ua    浏览器UA字符串
 * @returns {*} 匹配成功，返回分割后的数组，失败返回空数组
 */
export default function ({reg, splitStr = '/', ua} = {}) {
    const result = (reg).exec(ua);
    if (!result){
        return [];
    }

    const str = result[0];

    if(!checkStr(str,ua)){
        return [];
    }

    return str.split(splitStr);
}