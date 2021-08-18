css优先级如何计算
介绍下box-sizing属性
z-index的层级关系及css中的层叠上下文
display:none和visibility:hidden的区别
清除浮动的方法
1像素边框在移动端的实现
rem和em区别及使用方法
CSS中哪些属性可以继承
CSS3动画的实现步骤
### CSS 中 link 和@import 的区别是？
```js
<link rel="stylesheet" href="style.css" type="text/css"/>
@import url("style.css");
1. link 属于 HTML 标签, 无兼容性问题，而@import 是 CSS 提供的; 
2. 页面被加载的时，link 会同时被加载，而@import 引用的 CSS 会等到页面被加载完
再加载;
```

### CSS3 有哪些新特性
```js
1. CSS3 实现圆角（border-radius），阴影（box-shadow），
2. 对文字加特效（text-shadow、），线性渐变（gradient），旋转（transform）
3. transform:rotate(9deg) scale(0.85,0.90) translate(0px,-30px) skew(-9deg,0deg);// 旋转,
缩放,定位,倾斜
4. 增加了更多的 CSS 选择器 多背景 rgba 
5. 在 CSS3 中唯一引入的伪元素是 ::selection. 
6. 媒体查询，多栏布局
7. border-image
```

### CSS 选择符有哪些？哪些属性可以继承？优先级算法如何计算？
```js
CSS 选择符：
  1.id 选择器(# myid) 
  2.类选择器(.myclassname) 
  3.标签选择器(div, h1, p) 
  4.相邻选择器(h1 + p) 
  5.子选择器(ul > li) 
  6.后代选择器(li a) 
  7.通配符选择器( * ) 
  8.属性选择器(a[rel = "external"]) 
  9.伪类选择器(a: hover, li:nth-child) 
可继承的样式：
  1.font-size 
  2.font-family 
  3.color 
  4.text-indent 
不可继承的样式：
  1.border 
  2.padding 
  3.margin 
  4.width 
  5.height

!important的优先级别最高 权重值为1111

第一等级：内联样式 如: style="", 权重值为1000

第二等级：ID选择器 如: #content, 权重值为0100

第三等级：类、伪类和属性选择器 如： .content, 权重值为0010

第四等级：类型选择器和伪元素选择器 如： div p, 权重值为0001

第五等级：通配符、子选择器、相邻选择器 如：*、>、+, 权重值为0000

第六等级：继承的样式没有权值
```

### web 页面级优化
```js
1.减少 HTTP 请求的次数
2.进行资源合拼和压缩
3.Inline images
4.将外部脚本置于低端
5.减少不必要的 HTTP 跳转
```

### 以下位于<head>间的代码片段是做什么用的
```js
<meta name="viewport" content="width=device-width, initial-scale=1">
表示支持响应式设计
```