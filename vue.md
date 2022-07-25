参考: https://zhuanlan.zhihu.com/p/522659518

#### 1、为什么说VUE是一个渐进式的javascript框架, 渐进式是什么意思？
```
对于VUE的使用可大可小，它都会有相应的方式来整合到你的项目中。所以说它是一个渐进式的框架
```
#### 2、Vue实现数据双向绑定的原理
```
采用数据劫持结合发布者-订阅者模式的方式
通过Object.defineProperty（）来劫持各个属性的setter，getter
在数据变动时发布消息给订阅者，触发相应监听回调。
```

#### 3、MVVM
```
Model(模型)：是用于处理应用程序数据逻辑部分。通常模型对象负责在数据库中存取数据

View(视图)：是应用程序中处理数据显示的本分。通常视图是依据模型数据创建的

ViewModel: 双向绑定
  数据变化后更新视图
  视图变化后更新数据
当然，它还有两个主要部分组成
  监听器（Observer）：对所有数据的属性进行监听
  解析器（Compiler）：对每个元素节点的指令进行扫描跟解析,根据指令模板替换数据,以及绑定相应的更新函数
```

#### 3、为什么data是一个函数
```
给每个组件实例创建一个私有的数据空间，让各个组件实例维护各自的数据。
而单纯的写成对象形式就使得所有组件实例共用了一份data
```
#### 4、Vue组件通讯有哪些方式
```
1、props 和 $emit
2、$parent 和 $children
3、$attrs 和 $listeners
4、父组件中通过 provide 来提供变量，然后在子组件中通过 inject 来注入变量
5、$refs 获取组件实例
6、envetBus 兄弟组件数据传递
7、vuex 状态管理
```

#### 5、Vue的生命周期方法有哪些
```
beforeCreate: Vue在实例初始化, data不能被访问
created: 有data
beforeMount: DOM在挂载开始之前被调用
mounted: DOM在挂载完成后发生
beforeUpdate: 数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁 （patch）之前。
updated: 发生在更新完成之后，当前阶段组件 Dom 已经完成更新
beforeDestroy: 实例销毁之前调用, 清除定时器
destroy: Vue实例销毁后调用

activated keep-alive 专属，组件被激活时调用
deactivated keep-alive 专属，组件被销毁时调用
```

#### 6、v-if 和 v-show 的区别
```
v-if  不会渲染DOM
v-show 渲染DOM, display:none
```
#### 7、说说 vue 内置指令
```
v-html
v-text
v-modle
v-if
v-show
v-for
v-bind
v-on
v-once
v-pre
v-slot
```

#### 8、怎样理解 Vue 的单项数据流
```
数据总是从父组件传到子组件，子组件没有权利修改父组件传过来的数据
```

#### 9、computed 和 watch 的区别和运用的场景
```
computed 是计算属性, 一般用在模板渲染中
watch 监听到值的变化就会执行回调, 适用于观测某个值的变化去完成一段复杂的业务逻辑
```
#### 10、v-if 和 v-for 为什么不建议一起使用
```
v-for和v-if不要在同一标签中使用，因为解析时先解析v-for在解析v-if。
如果遇到需要同时使用时可以考虑写成计算属性的方式。
```

#### 11、Vue 2.0 响应式数据的原理
```
整体思路是数据劫持 + 观察者模式
1、Object.defineProperty 数据劫持
2、使用 getter 收集依赖 ，setter 通知 watcher派发更新。
3、watcher 发布订阅模式。
```
#### 12、vue.js的两个核心是什么？
数据驱动和组件化

#### 13、Vue3.0 用过吗？了解多少？
```
响应式原理的改变 Vue3.x 使用 Proxy 取代 Vue2.x 版本的 Object.defineProperty。

组件选项声明方式 Vue3.x 使用 Composition API
```

#### 14、Vue3.0 和 2.0 的响应式原理区别
```
Vue3.x 改用 Proxy 替代 Object.defineProperty。因为 Proxy 可以直接监听对象和数组的变化
```

#### 15、Vue的父子组件生命周期钩子函数执行顺序
```
加载渲染过程
父beforeCreate -> 父created -> 父beforeMount -> 子beforeCreate -> 子created -> 子beforeMount -> 子mounted -> 父mounted

子组件更新过程
父beforeUpdate -> 子beforeUpdate -> 子updated -> 父updated

父组件更新过程
父beforeUpdate -> 父updated

销毁过程
父beforeDestroy -> 子beforeDestroy -> 子destroyed -> 父destroyed
```

#### 16、虚拟DOM是什么？有什么优缺点？
```
由于在浏览器中操作DOM是很昂贵的。频繁操作DOM，会产生一定性能问题。这就是虚拟Dom的产生原因
Vue2的虚拟DOM 借鉴了开源库 snabbdom 的实现
虚拟DOM本质就是用一个原生的JS对象去描述一个DOM节点，是对真实DOM的一层抽象
```

#### 17、v-for为什么要加key
```
key是每个节点做一个唯一标识
key的作用主要是为了高效的更新虚拟DOM
```

#### 18、Vue事件绑定原理
```
$on、$emit 是基于发布订阅模式
```

#### 19、$route和 $router的区别是什么？
```
$router为VueRouter的实例，是一个全局路由对象，包含了路由跳转的方法、钩子函数等。
$route 是路由信息对象||跳转的路由对象，每一个路由都会有一个route对象，是一个局部对象，包含path,params,hash,query,fullPath,matched,name等路由信息参数。
```

#### 19、vue-router 路由钩子函数是什么？执行顺序是什么？
```
路由钩子的执行流程，钩子函数种类有：全局守卫、路由守卫、组件守卫。

完整的导航解析流程：
1、导航被触发。
2、在失活的组件里调用 beforeRouterLeave 守卫。
3、调用全局的 beforeEach 守卫。
4、在重用的组件调用 beforeRouterUpdate 守卫（2.2+）。
5、在路由配置里面 beforeEnter。
6、解析异步路由组件。
7、在被激活的组件里调用 beforeRouterEnter。
8、调用全局的 beforeResolve 守卫（2.5+）。
9、导航被确认。
10、调用全局的 afterEach 钩子。
11、触发 DOM 更新。
12、调用 beforeRouterEnter 守卫中传给next的回调函数，创建好的组件实例会作为回调函数的参数传入
```

#### 20、vue-router 组件复用导致路由参数失效怎么办？
```
1、通过watch监听路由参数再发请求
2、router-view :key="$route.fullPath" (或者 key = new Date.toString())
```

#### 21、谈一下对 vuex 的个人理解
```
vuex 是专门为 vue 提供的全局状态管理系统，用于多个组件中数据共享、数据缓存等。
内部核心原理是通过创造一个全局实例 new Vue

主要包括以下几个模块：
  State: 定义了应用状态的数据结构，可以在这里设置默认的初始化状态。
  Getter: 允许组件从Store中获取数据
  Mutation: 是唯一更改 store 中状态的方法，且必须是同步函数。
  Action: 用于提交 mutation，而不是直接变更状态，可以包含任意异步请求。
  Module: 允许将单一的 Store 拆分更多个 store 且同时保存在单一的状态树中。
```
#### 22、Vuex 页面刷新数据丢失怎么解决？
```
一般使用本地储存的方案来保存数据
或推荐使用 vuex-persist 插件 (直接将状态保存至 cookie 或者 localStorage中)
```

#### 23、使用过 Vue SSR 吗？说说 SSR
```
SSR 也就是服务端渲染，也就是将 Vue 在客户端把标签渲染成 HTML 的工作放在服务端完成，然后再把 html 直接返回给客户端。

优点：
SSR 有着更好的 SEO、并且首屏加载速度更快。
缺点：
服务器会有更大的负载需求
```

#### 30、Vue.set 方法原理
```
了解 Vue 响应式原理的同学都知道在两种情况下修改 Vue 是不会触发视图更新的。
1、在实例创建之后添加新的属性到实例上（给响应式对象新增属性）
2、直接更改数组下标来修改数组的值。

Vue.set 或者说是 $set 原理如下

因为响应式数据 我们给对象和数组本身新增了__ob__属性，代表的是 Observer 实例。当给对象新增不存在的属性，首先会把新的属性进行响应式跟踪 然后会触发对象 __ob__ 的dep收集到的 watcher 去更新，当修改数组索引时我们调用数组本身的 splice 方法去更新数组。
```
#### 31、Vue.extend 作用和原理
```
官方解释：Vue.extend 使用基础 Vue 构造器，创建一个“子类”。参数是一个包含组件选项的对象。

其实就是一个子类构造器，是Vue组件的核心api。实现思路就是使用原型继承的方法返回了 vue 的子类，并且利用 mergeOptions 把传入组件的 options 就和父类的 options 进行了合并。
```

#### 32、写过自定义指令吗？原理是什么？
```
指令本质上是装饰器，是 vue 对 HTML 元素的扩展，给 HTML 元素添加自定义功能。vue 编译 DOM 时，会找到指令对象，执行指令的相关方法。

自定义指令有五个生命周期（也叫钩子函数），分别是 bind、inserted、update、componentUpdated、unbind
  1、bind：只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
  2、inserted：被绑定元素插入父节点时调用。
  3、update：被绑定元素所在的模板更新时调用，而不论绑定值是否变化。通过比较前后的绑定值。
  4、componentUpdated：被绑定元素所在模板完成一次更新周期时调用。
  5、unbind：只调用一次，指令与元素解绑时调用。

原理：
1、在生成 ast 语法树时，遇到指令会给当前元素添加 directives 属性
2、通过 genDirectives 生成指令代码
3、在 patch 前将指令的钩子提取到 cbs 中，在 patch 过程中调用对应的钩子。
4、当执行指令对应钩子函数时，调用对应指令定义方法。
```

#### 34、Vue 模板编译原理
```
Vue 的编译过程就是将 template 转化为 render 函数的过程，分为以下三步：
第一步是将 模板字符串转换成 element ASTs（解析器）
第二步是对 AST 进行静态节点标记，主要用来做虚拟 DOM 的渲染优化（优化器）
第三步是 使用element ASTs 生成 render 函数代码字符串（代码生成器）
```


