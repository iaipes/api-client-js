import BaseClient from '../../BaseClient'


class InscriptionClient extends BaseClient {
  
  index(data = {}) {
    return this.request('/api/v1/inscriptions', 'get', data)
  }

  show(uuid = '', data = {}) {
    return this.request('/api/v1/inscriptions/' + uuid, 'get', data)
  }

}

export default InscriptionClient