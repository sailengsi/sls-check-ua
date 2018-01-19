import checkStr from './check-str';

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