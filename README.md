## 检测浏览器类型

### 安装方式
```
    npm install check-ua
    or
    <script src="uc.js"></script>
```

### 初始化
```
const ucObj = new UC();
or
const ucObj = new UC('自定义UA');

console.log(ucObj.ua);  // 返回 ua 字符串
```


### 检测浏览器类型方法 isXXX() 两种使用方法

#### 不传参数 
```
ucObj.isChrome()
```

成功时，返回一个对象，格式如下：
```
{
	name:'浏览器名称',
	version:'浏览器版本名称源值',
	v:'浏览器版本取整后的值'
}
```

失败时返回`false`


#### 传入参数true
```
ucObj.isChrome(true)
```

成功时返回`true`,失败时返回`false`


### 支持的方法如下
```
isChrome,
isFirefix,
isMobile,
isOpera,
isSafari,
isTablet,
isTV,
isWebKit,
isAndroid,
isIOS,
isIPad,
isIPhone,
isIPod,
isWeChat
```

### 获取自定义UA方法 getCheckCustom()

```
ucObj.getCheckCustom(正则表达式)
```
成功返回匹配成功的字符串，失败返回`false`

### 检测自定义UA是否存在UA中 isCheckCustom(str)

> 检测依据为以下三种情况符合任意一种即可
- 以 `str +  ' '`开头
- 以 `' ' + str`结尾
- 包含 `' ' + str + ' '`

```
ucObj.isCheckCustom(自定义UA字符串)
```
成功返回`true`,失败返回`false`


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