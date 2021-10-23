import Vue from 'vue'

export const store = Vue.observable({count:0,name:'效力'})

export const mutations ={
  changCount(count){
    store.count = count
  },
  changName(paylod){
    store.name = paylod
  }
}
