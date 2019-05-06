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
  }]
}]
export default routerConfig
