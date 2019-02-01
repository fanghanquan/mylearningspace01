import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import test from '@/components/test/testTable.vue'
import pageBar from '@/components/test/pageBar.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path:"/testTable",
      name:"testTable",
      component:test,
      children:[
        {
          path:"/testTable",
          name:"pageBar",
          component:pageBar,
        }
      ]
    },
  ]
})
