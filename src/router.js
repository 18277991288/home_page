import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import AutoComplete from './components/AutoComplete.vue'
import Calculator from './components/Calculator.vue'
import Timer from './components/Timer.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/',
      redirect:'home',

    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/AutoComplete',
      name: 'AutoComplete',
      component: AutoComplete
    },
    {
      path: '/Calculator',
      name: 'Calculator',
      component: Calculator
    },
    {
      path: '/Timer',
      name: 'Timer',
      component: Timer
    },
  ]
})
