var expect = chai.expect;

console.log(UC);
var licai = UC.updateLicai(window.mochaTestUa);
console.log(licai);

describe(`当UA为 ${window.mochaTestUa} 时，测试结果如下`,function () {
    it('licai.LuLuYouSDK',function () {
        expect(licai.LuLuYouSDK).to.be.equals(licai.LuLuYouSDK.indexOf('LuLuYouSDK')!==-1);
    });

    it('isChrome(true) 传一个参数true，返回true',function () {
        expect(ucObj.isChrome(true)).to.be.equal(true);
    });
});
