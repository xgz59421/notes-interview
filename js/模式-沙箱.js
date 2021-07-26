let sandboxModel=(function(){
  function sayName(){
    console.log('1');
  };
  function sayAge(){
    console.log('2');
  };
  return{
      sayName:sayName,
      sayAge:sayAge
  }
})()


sandboxModel.sayName(sandboxModel)