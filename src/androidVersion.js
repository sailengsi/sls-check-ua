/**
 * 获取Android版本号
 * @param  {String} ua 浏览器UA
 * @return {Number}    版本号，不存在返回0
 */
export default function(ua) {
	const res = / Android[\s ][\d|.]{1,}/.exec(ua);
	if (res && res[0]) {
		return parseInt(res[0].replace(/ /, '').split(' ')[1]);
	}
	return 0;
}