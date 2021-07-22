// 1. 闭包

let bibao = function () {
  let count = 0
  return function () {
    return ++count 
  }
}

let b1 = bibao();
let c1 = b1();
console.log(c1);

let c2 = b1(); 
console.log(c2);