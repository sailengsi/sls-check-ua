console.log(UC);

var expect = chai.expect;

// 不包含理财示例
// console.log(isNotIncludeLicaiUaRes);
describe(`这是默认浏览器不包含理财UA的测试：${window.navigator.userAgent}`, function() {
	it('UC.licai 返回一个空对象', function() {
		expect(Object.keys(UC.licai).length).to.be.equal(0);
	});
});

// 包含理财所有示例
const isSuccessIncludeAllByLicaiUa = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) LuLuYouSDK/1.00-2_3 LuLuYouVersion/10 LuLuYouChannel/appstoreAppStore LuLuYouApp/LiCai';
const isSuccessIncludeAllByLicaiUaRes = UC.updateLicai(isSuccessIncludeAllByLicaiUa);
// console.log(isSuccessIncludeAllByLicaiUaRes.LuLuYouSDK);
describe(`这是包含理财所有的UA测试：${isSuccessIncludeAllByLicaiUa}`, function() {
	it('1，UC.updateLicai(ua) 返回一个对象，包含4个属性： LuLuYouSDK,LuLuYouVersion,LuLuYouChannel,LuLuYouApp', function() {
		expect((function() {
			let keys = Object.keys(isSuccessIncludeAllByLicaiUaRes);
			return isLly = keys.indexOf('LuLuYouSDK') !== -1 && keys.indexOf('LuLuYouVersion') !== -1 && keys.indexOf('LuLuYouChannel') !== -1 && keys.indexOf('LuLuYouApp') !== -1;
		})()).to.be.equal(true);
	});
	it('2，属性  LuLuYouSDK 的值为：["LuLuYouSDK","1.00-2_3"]', function() {
		expect(isSuccessIncludeAllByLicaiUaRes.LuLuYouSDK.indexOf('LuLuYouSDK') !== -1 && isSuccessIncludeAllByLicaiUaRes.LuLuYouSDK.indexOf('1.00-2_3') !== -1).to.be.equal(true);
	});
	it('3，属性   LuLuYouVersion 的值为：["LuLuYouVersion","10"]', function() {
		expect(isSuccessIncludeAllByLicaiUaRes.LuLuYouVersion.indexOf('LuLuYouVersion') !== -1 && isSuccessIncludeAllByLicaiUaRes.LuLuYouVersion.indexOf('10') !== -1).to.be.equal(true);
	});
	it('4，属性    LuLuYouChannel 的值为：["LuLuYouChannel","appstoreAppStore"]', function() {
		expect(isSuccessIncludeAllByLicaiUaRes.LuLuYouChannel.indexOf('LuLuYouChannel') !== -1 && isSuccessIncludeAllByLicaiUaRes.LuLuYouChannel.indexOf('appstoreAppStore') !== -1).to.be.equal(true);
	});
	it('5，属性   LuLuYouApp 的值为：["LuLuYouApp","LiCai"]', function() {
		expect(isSuccessIncludeAllByLicaiUaRes.LuLuYouApp.indexOf('LuLuYouApp') !== -1 && isSuccessIncludeAllByLicaiUaRes.LuLuYouApp.indexOf('LiCai') !== -1).to.be.equal(true);
	});
});

// 包含理财字段 LuLuYouApp/xxxx 正确示例
const isSuccessIncludeLuLuYouAppByLicaiUa = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) LuLuYouApp/LiCaiApp';
const isSuccessIncludeLuLuYouAppByLicaiUaRes = UC.updateLicai(isSuccessIncludeLuLuYouAppByLicaiUa);
// console.log(isSuccessIncludeLuLuYouAppByLicaiUaRes);
describe(`这是包含理财 LuLuYouApp 的UA测试：${isSuccessIncludeLuLuYouAppByLicaiUa}`, function() {
	it('2，属性  LuLuYouApp 的值为：["LuLuYouApp","LiCaiApp"]', function() {
		expect(isSuccessIncludeLuLuYouAppByLicaiUaRes.LuLuYouApp.indexOf('LuLuYouApp') !== -1 && isSuccessIncludeLuLuYouAppByLicaiUaRes.LuLuYouApp.indexOf('LiCaiApp') !== -1).to.be.equal(true);
	});
});

// 包含理财字段 LuLuYouApp/xxxx 错误示例
const isErrorIncludeLuLuYouAppByLicaiUa = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) TestLuLuYouApp/LiCai';
const isErrorIncludeLuLuYouAppByLicaiUaRes = UC.updateLicai(isErrorIncludeLuLuYouAppByLicaiUa);
// console.log(isErrorIncludeLuLuYouAppByLicaiUaRes);
describe(`这是包含理财 LuLuYouApp 的UA测试：${isSuccessIncludeLuLuYouAppByLicaiUa}`, function() {
	it('2，属性  LuLuYouApp 的值为：undefined', function() {
		expect(isErrorIncludeLuLuYouAppByLicaiUaRes.LuLuYouApp).to.be.equal(undefined);
	});
});