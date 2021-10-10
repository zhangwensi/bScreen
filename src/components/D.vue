<template>
  <div>
    <p>这个是非props的{{$attrs}}</p>
    <p v-on="$listeners">这个是自动监听父组件parentClick事件</p>
  </div>
</template>

<script>
export default {
  name:'D',
  props:{
    foo:{
      type: String,
      default: {}
    }
  },
  data() {
    return {

    }
  },
  mounted(){
    this.$emit('parentClick')
  }
}
</script>

<style scoped>

</style>
