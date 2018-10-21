import BaseClient from '../../BaseClient'


class InstitutionClient extends BaseClient {
  
  index(data = {}) {
    return this.request('/api/v1/institutions', 'get', data)
  }

  show(uuid = '', data = {}) {
    return this.request('/api/v1/institutions/' + uuid, 'get', data)
  }

}

export default InstitutionClient