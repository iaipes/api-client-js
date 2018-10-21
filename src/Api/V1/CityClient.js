import BaseClient from '../../BaseClient'


class CityClient extends BaseClient {
  
  index(data = {}) {
    return this.request('/api/v1/cities', 'get', data)
  }

  show(uuid = '', data = {}) {
    return this.request('/api/v1/cities/' + uuid, 'get', data)
  }

}

export default CityClient