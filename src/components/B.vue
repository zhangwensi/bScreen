<template>
  <div>
    <p>{{message}}</p>
  </div>
</template>

<script>
import bus from '../utils/bus'
export default {
  name: 'B',
  data() {
    return {
      message:'这是组件B'
    }
  },
  mounted(){
    bus.$on('test',(val) => {
        console.log(val)
        this.message = val
    })
  },
  methods: {
    
  }
}
</script>

<style scoped>

</style>
