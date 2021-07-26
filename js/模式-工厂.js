function CreatePerson(name,age,sex) {
  var obj = {
    name,
    age,
    sex,
    sayName: function(){
      return this.name;
    }
  }
  return obj;
}
var p1 = new CreatePerson("longen",'28','男');
var p2 = new CreatePerson("tugenhua",'27','女');
console.log(p1)
console.log(p1.sayName());
console.log('----------------------------');
console.log(p2);
console.log(p2.sayName());