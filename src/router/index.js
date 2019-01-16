import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import population from '@/components/population'
import thermo from '@/components/thermodynamic'
import imageData from '@/components/imageData'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children:[
        {
          path:'/thermo',
          name:'thermo',
          component:thermo
        },
        {
          path:'/imageData',
          name:'imageData',
          component:imageData
        }
      ]
    },
    {
      path:'/population',
      name:'population',
      component:population
    },
    
  ]
})
