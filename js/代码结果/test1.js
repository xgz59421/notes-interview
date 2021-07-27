// c = 3 设置了默认值
function side(arr) { arr[0] = arr[2]; }
function a(a, b, c = 3) {
  c = 10;
  console.log(arguments);
  console.log(a, b, c);
  side(arguments);
  return a + b + c;
}

console.log(a(1, 1, 1));