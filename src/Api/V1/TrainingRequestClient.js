import BaseClient from '../../BaseClient'


class TrainingRequestClient extends BaseClient {
  
  index(data = {}) {
    return this.request('/api/v1/training_requests', 'get', data)
  }

  show(uuid = '', data = {}) {
    return this.request('/api/v1/training_requests/' + uuid, 'get', data)
  }

}

export default TrainingRequestClient