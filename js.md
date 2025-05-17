#### 1. js据类型
```
基本数据类型: String, Number, Boolean, null, undefined, 
引用数据类型: Array, Object, Function
```

#### 2. es6新特性
```
let, const, proxy, 箭头函数, 解构, ..., 模板字符串, class, generator,
map, set, symbol, 默认参数, esmodule模块化
```

#### 3. js作用链域
```
作用域链的原理和原型链很类似，如果这个变量在自己的作用域中没有，那么它会寻找父级的，直到最顶层。
```

#### 4. 什么是闭包（closure），为什么要用它？
```
闭包指的是一个函数可以访问另一个函数作用域中变量。
常见的构造方法，是在一个函数内部定义另外一个函数。
内部函数可以引用外层的变量；外层变量不会被垃圾回收机制回收。
闭包的原理是作用域链
优点：避免全局变量污染。
缺点：容易造成内存泄漏
```

#### 5. 数组对象有哪些原生方法
```
push, pop, unshift, shift, slice, splice, concat, join, 
sort, reverse, indexOf, toString,
reduce, map, filter, some, every, find, forEach, isArray
```

#### 6. string 截取函数
```
slice (start, end)
substring (start, end)
substr (start, length)
```

#### 7. event-loop
```
宏任务: script代码, setTimeout, setInterval, setImmediate(IE)
微任务: promise, await, process.nextTick(node独有), MutationObserver

--------------------------主线程-------------------------->
宏任务(script代码)-----> 微任务(Event Queue) -------> 宏任务(Event Queue)
```

#### 8. 深拷贝和浅拷贝的区别：
```
https://blog.csdn.net/qq_45479404/article/details/125001566

浅拷贝主要是对指针的拷贝，拷贝后两个指针指向同一个内存空间.
深拷贝会创造一个一摸一样的对象，新对象和原对象不共享内存，修改新对象不会改变原对对象.

1、浅拷贝
// ​​Object.assign​​方法实行的是浅拷贝
const obj1 = {a: {b: 1}}
const obj2 = Object.assign({}, obj1)
obj1.a.b = 2
console.log('obj2', obj2)
// obj2.a.b = 2

2、深拷贝
a、JSON转换
JSON.parse(JSON.stringify(obj))
缺点：
1) 如果对象有函数，函数无法被拷贝下来
2)无法拷贝对象原型链上的属性和方法
3)当数据的层次很深，会栈溢出

b、递归函数

Array的深拷贝
通过slice方法
通过concat方法
通过ES6语法中的 …
通过Array.from 方法
```