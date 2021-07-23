class Dep {
  constructor() {
    this.subs = []
  }
  addSub(watcher) {
    this.subs.push(watcher)
  }
  notify() {
    this.subs.forEach(watcher => {
      if (watcher && watcher.update) {
        watcher.update()
      }
    });
  }
}

class Watcher {
  update() {
    console.log('update');
  }
}



// 测试
let dep = new Dep()
let watcher1 = new Watcher()
let watcher2 = new Watcher()

dep.addSub(watcher1)
dep.addSub(watcher2)

dep.notify()