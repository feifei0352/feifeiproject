import Vue from 'vue'
import Router from 'vue-router'
import Forum from './views/Forum'
import Forum_list from './views/Forum_list'
import Forum_detail from './views/Forum_detail'
import Forum_class from './views/Forum_class'
//ES6

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/forum',component:Forum},
    {path:'/forum_list',component:Forum_list},
    {path:'/forum_detail',component:Forum_detail},
    {path:'/forum_class',component:Forum_class}
  ]
})
 