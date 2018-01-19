/**
 * 对正则表达式结果做严谨匹配，符合三种条件才算OK。以空格开头且在UA的最后；以空格结尾且在UA的最前面；前后都有空格，肯定是OK。
 * @param str   正则表达式匹配出来的值
 * @param sourceStr UA字符串
 * @returns {boolean}   成功返回true，失败返回false
 */
export default function (str,sourceStr) {
    const bettewnFlag = sourceStr.indexOf(` ${str} `) !== -1,
        firstFlag = sourceStr.indexOf(`${str} `) === 0,
        lastFlag = sourceStr.indexOf(` ${str}`) !== -1 && ( parseInt(sourceStr.indexOf(` ${str}`)) + parseInt((` ${str}`).length) === parseInt(sourceStr.length) );

    return bettewnFlag || firstFlag || lastFlag;
}