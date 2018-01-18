import common from './common';

import licai from './licai';

// ......其他自定义


let testUa = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.35555 LuLuYouSDK/1.00-2_3 LuLuYouVersion/10 LuLuYouChannel/appstoreAppStore LuLuYouApp/LiCai';

let ua = navigator.userAgent;


export default Object.assign({}, common(testUa), {
    licai: licai(testUa)
});