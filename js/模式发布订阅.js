
class EventEmitter {
  constructor () {
    this.events = []
  }
  on (handle, callfn) {
    if (!this.events[handle]) this.events[handle] = []
    this.events[handle].push(callfn)
  }
  emit (handle) {
    let handleArray = this.events[handle];
    handleArray && handleArray.forEach(event => {
      event()
    });
  }
}

// 测试
let em = new EventEmitter()
em.on('click', () => {
  console.log('click1')
})
em.on('click', () => {
  console.log('click2')
})

em.emit('click')
em.emit('dbclick')