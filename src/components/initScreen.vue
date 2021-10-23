<template>
  <div class="wrap">
    <div class="scale-box" ref="scaleBox" :style="{width,height}">
      <!-- 大屏初始化解决方案 -->
    </div>
  </div>
</template>

<script>
export default {
  name: "initScreen",
  props:{
    width:{
      type:Number,
      default: 1920
    },
    heifht:{
      type:Number,
      default: 1080
    }
  },
  data(){
    return {
      scale: null
    }
  },
  methods:{
    getSize() {
      const {height,width} = this
      let ww = window.innerWidth / width
      let wh = window.innerHeight / height
      return ww>wh ? ww:wh
    },
    setSize() {
      this.scale = this.getSize()
      this.$refs.scaleBox.style.setProperty('--scale',this.scale)
    },
    // 设置节流
    debounce(fn,time) {
      let dealy = time || 500
      let timer
      return function() {
        let th = this
        let arg = arguments
        if(timer) {
          clearTimeout(timer)
        }
        timer = setTimeout(()=>{
          timer = null
          fn.apply(th,arg)
        },dealy)
      }
    }
  }
}
</script>

<style scoped>
#scaleBox {
  --scale: 1
}
.wrap {
  background: #eee;
  width: 100%;
  height: 5000px;
}
.ScaleBox {
  transform: scale(var(--scale)) translate(-50%, -50%);
  display: flex;
  height: 100%;
  flex-direction: column;
  transform-origin: 0 0;
  position: absolute;
  left: 50%;
  top: 50%;
  transition: 0.3s;
  z-index: 999;
}
</style>
