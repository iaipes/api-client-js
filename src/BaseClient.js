import axios from 'axios'
import Config from './Config'
import Qs from 'qs'

class BaseClient {
  constructor(options = {}) {
    Config.paramsSerializer = function (params) {
      return Qs.stringify(params, {
        arrayFormat: 'brackets'
      })
    }
    options = Object.assign(Config, options)
    this.axios = axios.create(options)
    this.axios.interceptors.response.use(function (response) {
      // Do something with response data
      return Promise.resolve(response.data, response)
    }, function (error) {
      // Do something with response error
      return Promise.reject(error.response.data, error);
    });
  }

  request(path, method = 'get', data = {}, options = {}) {
    options = Object.assign(options, {
      params: data
    })
    return this.axios[method](path, options)
  }
}

export default BaseClient