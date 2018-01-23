/**
 * 获取iOS版本
 * @param  {String} ua 浏览器UA
 * @return {Number}    版本号，不存在返回0
 */
export default function(ua) {
	const res = / iPhone OS [\d|_]{1,}/.exec(ua);
	if (res && res[0]) {
		return parseInt(res[0].replace(/ /, '').split(' ')[2].split('_')[0]);
	}
	return 0;
}