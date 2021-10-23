<template>
  <div>
    <button>按钮的呢</button>
    <p>这是组件C里获取sotre中name的值{{name}}</p>
    <D :foo="foo" :cool="cool" @parentClick="parentClick"/>
    <button @click.stop="btn">父组件自定义按钮</button>
  </div>
</template>

<script>
import D from './D.vue'
import{store} from '../utils/store'
export default {
  name:"C",
  components: {D},
  data() {
    return {
      foo:'foo',
      cool:'cool'
    }
  },
  computed:{
    name:()=>{
      return store.name
    }
  },
  methods:{
    parentClick() {
      console.log('parentClick 事件')
      console.log(this.$root)
    },
    btn() {
      this.parentClick()
    }
  }
}
</script>

<style scoped>

</style>
