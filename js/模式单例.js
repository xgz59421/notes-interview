// 计数器例子

let Counter = (function () {
  let instance = null
  let count = 0
  
  function createCount() {
    console.log('111111111');
    return {
      add(){
        count ++
      },
      print(){
        console.log(count);
      }
    }
  }
  return function () {
    if (instance == null) {
      console.log('222');
       instance = new createCount()
    } 
    return instance
  }
})()

let counter1 = Counter();
console.log(counter1);
counter1.print()
counter1.add()
counter1.add()
counter1.print()

let counter2 = Counter();
counter2.add()
counter2.add()
counter2.print()
