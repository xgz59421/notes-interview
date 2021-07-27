/** EventLoop 事件循环
 * 宏任务: script代码, setTimeout, setInterval
 * 微任务: promise, await, process.nextTick(node中)
 * 
 * ---------------主线程--------------->
 * 宏任务(script代码)-----> 微任务(Event Queue) -------> 宏任务(Event Queue)
 * 
 * 注意:
 * 1. 只有async的函数就是普通函数
 * 2. new promise 是同步的任务，会被放到主进程中去立即执行
 */

async function async1() {
	console.log('async1 start');
	await async2();
	console.log('asnyc1 end');
}
async function async2() {
	console.log('async2');
}
console.log('script start');
setTimeout(() => {
	console.log('setTimeOut');
}, 0);
async1();
new Promise(function (reslove) {
	console.log('promise1');
	reslove();
}).then(function () {
	console.log('promise2');
})
console.log('script end');


// const promise = new Promise((resolve, reject) => {
//   console.log(1)
//   resolve()
//   console.log(2)
// })
// promise.then(() => {
//   console.log(3)
// })
// console.log(4)
// promise构造函数是同步执行的，then方法是异步执行的

