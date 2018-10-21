import BaseClient from '../../BaseClient'


class StateClient extends BaseClient {
  
  index(data = {}) {
    return this.request('/api/v1/states', 'get', data)
  }

  show(uuid = '', data = {}) {
    return this.request('/api/v1/states/' + uuid, 'get', data)
  }

}

export default StateClient