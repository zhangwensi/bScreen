<template>
  <div class="hello">
    <button @click="busFn">按钮</button>
  </div>
</template>

<script>
import bus from '../utils/bus'
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg:'这是组件A中的信息',
      timer:null // 定时器
    }
  },
  mounted(){
    // this.refresh()
  },
  destroyed() {
    clearInterval(this.timer)
  },
  methods: {
    busFn() {
      console.log('aaa')
      bus.$emit('test',this.msg)
    },
    // 定时刷新页面
    refresh() {
      this.timer = setInterval(()=>{
        window.location.reload()

      },5000)
    }
  }
}
</script>

<style scoped>

</style>
