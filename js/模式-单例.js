// 计数器例子

function createCount() {
  let count = 0
  return {
    add(){
      count ++
    },
    print(){
      console.log(count);
    }
  }
}

let Counter = (function () {
  let instance = null
  return function () {
    if (instance == null) {
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
