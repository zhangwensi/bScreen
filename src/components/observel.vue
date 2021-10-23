<template>
  <div>
    <p>{{relName}}</p>
    <p>这个是store中的name:{{name}}</p>
    <button @click="btn('niubi')">修改store中的姓名</button>
  </div>
</template>

<script>
import{store,mutations} from '../utils/store'
export default {
  name:"observel",
  components:{},
  data() {
    return {
      relName:"小王",
      sum:2
    }
  },
  computed:{
    name:()=>{
      return store.name
    },
    count:() => {
      return store.count
    }
  },
  methods:{
    setName: mutations.changName,
    btn(val){
      this.setName(val)
    }
  }
}
</script>
