import browser from './browser';

import licai from './licai';

import androidVersion from './androidVersion.js';

import iosVersion from './iosVersion.js';

// ......其他自定义


const ua = window.navigator.userAgent;

export default Object.assign({
	ua
}, browser(ua), {
	androidVersion: androidVersion(ua),
	iosVersion: iosVersion(ua),
}, {
	licai: licai(ua),
	updateLicai(ua) {
		return licai(ua || window.navigator.userAgent);
	}
});