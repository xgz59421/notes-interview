##### 浏览器内核有几种
```
IE浏览器内核：Trident内核
Chrome浏览器内核: Chrome内核
Firefox浏览器内核：Gecko内核，俗称Firefox内核
苹果Safari浏览器内核：Webkit内核
Opera浏览器内核：最初是自己的Presto内核
```

##### 从浏览器地址输入url到显示页面的步骤
1. 浏览器根据请求的url交给dns域名解析,找到真实的ip,向服务器发送请求; 
2. 服务器交给后台处理完成后返回数据,浏览器接收文件(html,js,css,图像等); 
3. 浏览器对加载到的资源(HTML,JS,CSS等)进行语法解析,建立对应的内部数据结构(如HTML的DOM); 
4. 载入解析到的资源文件,渲染页面,完成

##### 支付流程
1. 点击提交向服务器发送请求
2. 服务器返回支付地址, 客户端跳转支付地址
3. 用户支付 , 重定向到设置好的客户端地址, 告诉用户支付成功或失败
4. 同时向服务器发送请求,通知订单状态是否成功

##### TCP三次握手和四次挥手
```
客户端------------------>服务器
        1.请求建立连接

      <------------------
        2.确认消息, 请求建立连接
      ------------------->
        3.确认消息

四次挥手:
  1. 请求断开连接
  2. 确认消息
  3. 请求断开连接
  4. 确认消息
```

##### 简述一下前端事件流
1. 事件捕获阶段
2. 处于目标阶段
3. 事件冒泡阶段

##### 如何对网页的加载进行性能优化
```js
1. 减少http请求
2. 使用浏览器缓存
3. 启用压缩
4. CSS Sprites
5. 图片懒加载(先加载第一屏)
6. 减少cookie传输
```

一、重绘不一定需要重排，重排必然会导致重绘

1、重排：当渲染树的一部分必须更新并且节点的尺寸发生了变化，浏览器会使渲染树中受到影响的部分失效，并重新构造渲染树。

1）添加、删除可见的dom

2）元素的位置改变

3）元素的尺寸改变（外边距、内边距、边框厚度、宽高等几何属性）

4）页面渲染初始化

5）浏览器窗口尺寸改变

2、重绘：是在一个元素的外观被改变所触发的浏览器行为，浏览器会根据元素的新属性重新绘制，使元素呈现新的外观。

二、减少reflow、repaint

1、不要一条一条的修改DOM的样式，可以先定义好css的class，然后修改DOM的className。

2、不要把DOM结点的属性值放在一个循环里当成循环里的变量。

3、为动画的HTML元件适用fixed或absolute的position，那么修改他们的css是不会reflow