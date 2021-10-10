// 防抖
export function debounce(fn,time) {
  let timer = null
  return function() {
    // 清除前一个定时器
    clearTimeout(timer)
    timer = setTimeout(()=>{
      fn.apply(this,arguments)
    },time)
  }
  function succ() {
    console.log('防抖')
  }
}


// 节流
export function throttle(fn,time) {
  let flag = true
  return function() {
    if(!flag) return
    flag = false
    setTimeout(()=>{
      fn.apply(this,arguments)
      flag = true
    },time)
  }
}
