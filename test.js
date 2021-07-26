(function () {
  	// 方式1：创建了一个有返回值的构造函数，在里面定义了全部变量getName指向一个匿名函数（小心闭包）
    function Foo() {
      getName = function () {
          console.log(1);
      }
      return this;
  }
  // 方式2：构造函数的一个属性getName指向一个匿名函数
  Foo.getName = function () {
      console.log(2);
  }
  // 方式3：构造函数的原型上有个getName方法
  Foo.prototype.getName = function () {
      console.log('baidu' && 'google');
  }
  // 方式4：定义一个变量getName指向一个匿名函数
  var getName = function () {
      console.log(4);
  }
  // 方式5：声明一个叫getName的具名函数
  function getName() {
      console.log(5);
  }

  // 输出结果
  Foo.getName();
  getName();
  Foo().getName();
  getName(); 
  new Foo.getName(); 
  new Foo().getName();
  new new Foo().getName();
  // 2 4 1 1 2 "google" "google"

})()