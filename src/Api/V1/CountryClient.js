import BaseClient from '../../BaseClient'


class CountryClient extends BaseClient {
  
  index(data = {}) {
    return this.request('/api/v1/countries', 'get', data)
  }

  show(uuid = '', data = {}) {
    return this.request('/api/v1/countries/' + uuid, 'get', data)
  }

}

export default CountryClient