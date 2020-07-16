import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'

Vue.use(Router)

var routes = [
        {
          path:'/',
          name:'index',
          component:index
        }
        
]

export default new Router({
  routes:routes,
  mode:'history'   /*hash*/
})
