import mainPage from '@/pages/main'

const routerConfig = [{
  path: '/',
  redirect: 'place/index'
}, {
  path: '/place',
  component: mainPage,
  children: [{
    path: '/place/index',
    component: () => import(/* webpackChunkName : javascriptBasic */ '@/pages/javaScriptBasic')
  }, {
    path: '/place/mock',
    component: () => import(/* webpackChunkName : mock */ '@/pages/mock')
  }]
}]
export default routerConfig
