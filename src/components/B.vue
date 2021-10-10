<template>
  <div>
    <p>{{message}}</p>
    <p>{{realname}}</p>
    <div class="other">
      <!-- <iframe frameborder="0" width="80%" height="50%" src="http://139.196.178.250:8082/"></iframe> -->
    </div>
    <C @click.stop.native="outClick"/>
  </div>
</template>

<script>
import bus from '../utils/bus'
import C from './C.vue'
export default {
  name: 'B',
  components: {C},
  data() {
    return {
      message:'这是组件B',
      name:'xxx'
    }
  },
  computed:{
    realname: () =>{
      return  'ddddd'
    }
  },
  mounted(){
    bus.$on('test',(val) => {
        console.log(val)
        this.message = val
    })
  },
  methods: {
    outClick() {
      alert('B调用了')
    }
  }
}
</script>

<style scoped>
iframe {
  height: 600px;
}
</style>
