import BaseClient from '../../BaseClient'


class InformationRequestClient extends BaseClient {
  
  index(data = {}) {
    return this.request('/api/v1/information_requests', 'get', data)
  }

  show(uuid = '', data = {}) {
    return this.request('/api/v1/information_requests/' + uuid, 'get', data)
  }

}

export default InformationRequestClient