import Router from 'vue-router'

const routes = [
  {
    path:'/',
    name:'',
    component:() => import('../components/HelloWorld.vue')
  }
]

export default new Router({
  mode:"hash",
  scrollBehavior:()=>({y:0}),
  routes: routes
})
