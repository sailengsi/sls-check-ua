export default function (str,sourceStr) {
    const bettewnFlag = sourceStr.indexOf(` ${str} `) !== -1,
        firstFlag = sourceStr.indexOf(`${str} `) === 0,
        lastFlag = sourceStr.indexOf(` ${str}`) !== -1 && ( parseInt(sourceStr.indexOf(` ${str}`)) + parseInt((` ${str}`).length) === parseInt(sourceStr.length) );

    return bettewnFlag || firstFlag || lastFlag;
}