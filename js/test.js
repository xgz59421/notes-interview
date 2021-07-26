// const a = {
//   i: 1,
//   toString: function () {
//     return a.i++;
//   }
// }

// var val = 0;

// Object.defineProperty(globalThis, 'a', {
//   get: function() {
//     return ++val;
//   }
// });
// console.log(val);
// if(a == 1 && a == 2 && a == 3){
//      console.log(1);
// }


// var obj = {
//   '2': 3,
//   '3': 4,
//   'length': 2,
//   'splice': Array.prototype.splice,
//   'push': Array.prototype.push
// }
// obj.push(1)
// obj.push(1)
// console.log(obj)

// const obj = { 1: "a", 2: "b", 3: "c" };
// const set = new Set([1, 2, 3, 4, 5]);

// console.log(obj.hasOwnProperty("1"));
// console.log(obj.hasOwnProperty(1));
// console.log(set.has("1"));
// console.log(set.has(1));



// function Foo() {
//   Foo.a = function() {
//       console.log(1)
//   }
//   this.a = function() {
//       console.log(2)
//   }
// }
// // 以上只是 Foo 的构建方法，没有产生实例，此刻也没有执行

// Foo.prototype.a = function() {
//   console.log(3)
// }
// // 现在在 Foo 上挂载了原型方法 a ，方法输出值为 3

// Foo.a = function() {
//   console.log(4)
// }
// // 现在在 Foo 上挂载了直接方法 a ，输出值为 4

// Foo.a();
// // 立刻执行了 Foo 上的 a 方法，也就是刚刚定义的，所以
// // # 输出 4

console.log('1');
async function async1() {
    console.log('2');
    await async2();
    console.log('3');
}
async function async2() { console.log('4'); }
process.nextTick(function() { console.log('5'); })
setTimeout(function() {
    console.log('6');
    process.nextTick(function() {
        console.log('7');
    })
    new Promise(function(resolve) {
        console.log('8');
        resolve();
    }).then(function() {
        console.log('9')
    })
})
async1();
new Promise(function(resolve) {
    console.log('10');
    resolve();
}).then(function() {
    console.log('11');
});
console.log('12');