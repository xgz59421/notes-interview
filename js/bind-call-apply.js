// call 和 apply 都是为了解决改变 this 的指向。作用都是相同的，只是传参的方式不同。
// call 可以接收一个参数列表，apply 只接受一个参数数组

let a = {
  value: 1
}
function getValue(name, age) {
  console.log(name)
  console.log(age)
  console.log(this.value)
}
getValue('zh', 18) // this: global/window
getValue.call(a, 'yck', '24') // this: a
getValue.apply(a, ['yck', '24']) // this: a
getValue.bind(a)('zh', 18)
