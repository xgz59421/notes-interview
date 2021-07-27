var a = 1; 
(function a() { 
  a = 2; 
  console.log(a); 
})()

// 自执行函数 与内部 变量重名, 内部变量静默失败