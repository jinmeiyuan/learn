import request from '../config/request'

function myInterface (url, params = {}, methods = 'get') {
  return request({
    url: url,
    method: methods,
    data: JSON.stringify(params)
  })
}

export const test = () => myInterface('/test')
