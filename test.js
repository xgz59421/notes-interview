// const obj1 = {a: {b: 1}};
// const obj2 = Object.assign({}, obj1);
// obj1.a.b = 2;
// // obj2.a.b // 2
// console.log('obj2', obj2)


let person = {
  name: 'xia',
  age: 25,
  height: 160 
}
let otherPerson = Object.assign({},person)
person.age = 30
console.log(person) // {name: "xia", age: 30, height: 160}
console.log(otherPerson) // {name: "xia", age: 25, height: 160}