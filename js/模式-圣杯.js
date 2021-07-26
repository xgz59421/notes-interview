var inherit = (function(c,p){
  var F = function(){};
  return function(c,p){
      F.prototype = p.prototype;
      c.prototype = new F();
      c.uber = p.prototype;
      c.prototype.constructor = c;
  }
})();


function Person() {}
Person.prototype.run = function () { console.log('111111'); }

function Developer() {}

inherit(Developer, Person);


let de = new Developer();
de.run()
