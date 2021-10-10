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
      msg:'这是组件A中的信息'
    }
  },
  methods: {
    busFn() {
      console.log('aaa')
      bus.$emit('test',this.msg)
    }
  }
}
</script>

<style scoped>

</style>
