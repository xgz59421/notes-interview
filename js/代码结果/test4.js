var fullname = 'a'
var obj = {
  fullname: 'b',
  prop: {
    fullname: 'c',
    getFullname: function () {
      return this.fullname
    }
  }
};
console.log(obj.prop.getFullname())
var test = obj.prop.getFullname
console.log(test())