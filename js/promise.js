
const PENDING = 'pending'; // 等待
const FULFILLED = 'fulfilled'; // 成功
const REJECTED = 'rejected'; // 失败

class MyPromise {
  constructor(executor){
    this.status = PENDING;
    this.value = undefined;
    this.reason = undefined;
    executor(this.resolve, this.reject)
  }
  resolve = (value)=> {
    if (this.status !== PENDING) return
    this.status = FULFILLED
    this.value = value
  }
  reject = (reason)=> {
    if (this.status !== PENDING) return
    this.status = REJECTED
    this.reason = reason
  }
  then = (successCall, failCall)=> {
    if (this.status == FULFILLED) {
      successCall(this.value)
    } else if (this.status == REJECTED) {
      failCall(this.reason)
    }
  }
}

let promise = new MyPromise(function (resolve, reject) {
  resolve('成功');
  reject('失败');
});
promise.then(
  value=>console.log(value), 
  reason=>console.log(reason)
)