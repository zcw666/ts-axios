import { axiosRequestConfig } from './type/index'
import xhr from './xhr'
function axios(config: axiosRequestConfig) {
  // console.log(config);
  xhr(config)
}
export default axios
