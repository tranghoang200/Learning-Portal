import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '@/routers/Main'
import Home from '@/routers/Home'
import Courses from '@/routers/Courses'
import Test from '@/routers/Test'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [

    {
      path: '/',
      name: 'Main',
      component: Main,
      children: [
        {
          path: '',
          name: 'Home',
          component: Home
        },
        {
          path: '/courses/:id',
          name: 'Course',
          component: Courses
        },
        {
            path: '/test/:id',
            name: 'Test',
            component: Test
          },
    ]
    }
  ]
})

