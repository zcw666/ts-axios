import { axiosRequestConfig } from './type/index'
function xhr(config: axiosRequestConfig) {
  const { data = null, url, method = 'get' } = config
  const request = new XMLHttpRequest()
  request.open(method.toUpperCase(), url, true)
  request.send()
}
export default xhr
