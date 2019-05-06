import fetch from '../config/fetch'

/** *定位当前城市 */
export const cityGuess = () => fetch('/v1/cities', {
  type: 'guess'
})
// 获取所有商铺分类列表
export const restaurantCategory = (latitude = '', longitude = '') => fetch('/shopping/v2/restaurant/category', {
  latitude,
  longitude
})

// 食品分类列表
export const indexEntry = () => fetch('/v2/index_entry', {})
