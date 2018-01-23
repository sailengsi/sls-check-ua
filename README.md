## 检测浏览器类型

### 安装方式
```
    npm install check-ua
 	const UC = require('check-ua'); or import UC from 'check-ua';
    or
    <script src="uc.js"></script>
```

### 初始化
```
UC.ua;	// 当前浏览器userAgent字符串
```


### 目前UC对象支持的浏览器属性检测如下

> 匹配成功返回true，否则为false

```
UC.isChrome 	// 谷歌
UC.isFirefix 	// 火狐
UC.isMobile 	// 手机
UC.isOpera 		// 欧朋
UC.isSafari 	// Safari
UC.isTablet
UC.isTV
UC.isWebKit 	
UC.isAndroid
UC.isIOS
UC.isIPad
UC.isIPhone
UC.isIPod
UC.isWeChat
UC.isIe
UC.isWeChat
```

### 版本号
```
UC.androidVersion 	// 当时安卓时，返回对应的Android版本，否则返回0
UC.iosVersion 		// 当时iOS时，返回对应的iOS版本，否则返回0
```

### 自定义UA之理财客户端检测，目前理财客户端相关UA类型为如下：

- LuLuYouSDK/1.00-2_3  //客户端SDK版本
- LuLuYouVersion/10 	//客户端版本
- LuLuYouChannel/appstoreAppStore 	//客户端来源
- LuLuYouApp/LiCai 		//客户端名称

> 检测规则如下：

上面四个UA值，分别以斜杠前面的名称+/开头，匹配成功之后，再以/分割成数组，以斜杠前面的名称为key，数组为值得方式返回一个对象。

#### 理财检测返回如下：
```js
UC.licai;
```

上面返回一个对象，格式如下：

```json
{
	LuLuYouSDK:['LuLuYouSDK', '1.00-2_3'],
	LuLuYouVersion:['LuLuYouVersion', '10'],
	LuLuYouChannel:['LuLuYouChannel', 'appstoreAppStore'],
	LuLuYouApp:['LuLuYouApp', 'LiCai']
}
```

> **注意：如果某个属性没有检测到对应的UA，则返回的对象中不包含此属性。**

### updateLicai方法
此方法是为了测试而用。

### 手动构建
```
cd sls-check-ua
cnpm install
npm run build
```

### 单元测试
```
cd sls-check-ua
npm install
npm test
```
