var expect = chai.expect;

console.log(mocha);

const ucObj = new UC('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.35555 LuLuYouSDK/1.00-2_3 LuLuYouVersion/10 LuLuYouChannel/appstoreAppStore LuLuYouApp/LiCai');

console.log('本次测试模拟UA字符串为:');
console.log(ucObj.ua);

describe('通过 isCheckCustom 方法传入正则表达式来获取自定义UA测试',function () {
    it('通过正则/LuLuYouSDK\\/[\\S]{1,}/i 获取 LuLuYouSDK/1.00-2_3，返回字符串：LuLuYouSDK/1.00-2_3',function () {
        expect(ucObj.isCheckCustom(/LuLuYouSDK\/[\S]{1,}/i)).to.be.equal('LuLuYouSDK/1.00-2_3');
    });

    it('通过正则/LuLuYouSDK\\/[\\w]{1,}/i 获取 LuLuYouSDK/1.00-2_3，返回字符串：LuLuYouSDK/1',function () {
        expect(ucObj.isCheckCustom(/LuLuYouSDK\/[\w]{1,}/i)).to.be.equal('LuLuYouSDK/1');
    });
});



describe('使用 isXxx 方法检测当前浏览器类型,成功时',function () {
    it('isChrome() 不传参数，返回一个对象，包含三个属性分别为浏览器名称(name),源版本号(version)，取整后的版本号(v)。例如：{name:"Chrome",version:"63.0.3239.132",v:63}',function () {
        expect(ucObj.isChrome()).to.include.keys(['name','version','v']);
    });

    it('isChrome(true) 传一个参数true，返回true',function () {
        expect(ucObj.isChrome(true)).to.be.equal(true);
    });
});


describe('使用 isXxx 方法检测当前浏览器类型,失败时',function () {
    it('isFirefox(true) 判断当前是否为获取火狐浏览器，返回false',function () {
        expect(ucObj.isFirefox(true)).to.be.equal(false);
    });

    it('isFirefox() 不传参数，也返回false',function () {
        expect(ucObj.isFirefox()).to.be.equal(false);
    });
});

