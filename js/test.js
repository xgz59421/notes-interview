// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => reject('我是失败的Promise_1'));
// const promise4 = new Promise((resolve, reject) => reject('我是失败的Promise_2'));
// const promiseList = [promise1,promise2,promise3, promise4]
// Promise.allSettled(promiseList)
// .then(values=>{
//   console.log(values)
// });

// const promise1 = new Promise((resolve, reject) => reject('我是失败的Promise_1'));
// const promise2 = new Promise((resolve, reject) => reject('我是失败的Promise_2'));
// const promiseList = [promise1, promise2];
// Promise.any(promiseList)
// .then(values=>{
//   console.log(values);
// })
// .catch(e=>{
//   console.log(e);
// });

// const money = 1_000_000_000;
// //等价于
// const money = 1000000000;

// 1_000_000_000 === 1000000000; // true

// function foo () {
//   console.log(this)
// }
// foo() //
// foo.call(1) //

// const obj1 = {
//   foo: function () {
//     console.log(this)
//   }
// }

// // obj1.foo() //
// const fn = obj1.foo
// fn() //

const obj2 = {
  foo: function () {
    function bar () {
      console.log(this)
    }
    bar()
  }
}

obj2.foo()

function person () {
}
person()  // 函数调用
new person()  // 构造函数调用