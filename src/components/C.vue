<template>
  <div>
    <button>按钮的呢</button>
    <D :foo="foo" :cool="cool" @parentClick="parentClick"/>
    <button @click.stop="btn">父组件自定义按钮</button>
  </div>
</template>

<script>
import D from './D.vue'
export default {
  name:"C",
  components: {D},
  data() {
    return {
      foo:'foo',
      cool:'cool'
    }
  },
  methods:{
    parentClick() {
      console.log('parentClick 事件')
    },
    btn() {
      this.parentClick()
    }
  }
}
</script>

<style scoped>

</style>
