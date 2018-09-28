require('dotenv').config({
  path: require('path').resolve(process.cwd() + '/test', '.env')
})

const qs = require('qs')
const axios = require('axios')
const Config = require('../dist/api-client.min').Config
const test = require('japa')
const assetSuccessfulResponse = function (response, assert) {
  assert.isObject(response)
  assert.property(response, 'data')
  assert.property(response, 'meta');
  assert.isTrue(response.meta.status == 200);
}
const ApiV1InformationRequestClient = require('../dist/api-client.min').ApiV1InformationRequestClient
const ApiV1TrainingRequestClient = require('../dist/api-client.min').ApiV1TrainingRequestClient
const trainingRequest = new ApiV1TrainingRequestClient()
Config.baseURL = process.env.IAIPES_API_URL
Config.headers['Authorization'] = 'Bearer ' + process.env.IAIPES_API_TOKEN

test.group('Information Request', (group) => {

  test('index method', async (assert) => {
    assert.plan(4)
    const informationRequest = new ApiV1InformationRequestClient()
    try {
      let response = await informationRequest.index({
        include: 'institution',
        filter: {
          profession_cont: 'Desarrollador'
        },
        sort: 'created_at desc'
      })
      assetSuccessfulResponse(response, assert)
    } catch (error) {
      console.log(error)
    }
  })

  test('show method', async (assert) => {
    assert.plan(4)
    const informationRequest = new ApiV1InformationRequestClient()
    try {
      var indexResponse = await informationRequest.index()
      if (indexResponse.data.length > 0) {
        let response = await informationRequest.show(indexResponse.data[0].uuid)
        assetSuccessfulResponse(response, assert)
      }
    } catch (error) {
      console.log(error)
    }
  })
})



test.group('Training Request', (group) => {
  test('index method', async (assert) => {
    assert.plan(4)
    const trainingRequest = new ApiV1InformationRequestClient()
    try {
      let response = await trainingRequest.index({
        include: 'institution',
        filter: {
          profession_cont: 'Desarrollador'
        },
        sort: 'created_at desc'
      })
      assetSuccessfulResponse(response, assert)
    } catch (error) {
      console.log(error)
    }
  })

  test('show method', async (assert) => {
    assert.plan(4)
    const trainingRequest = new ApiV1InformationRequestClient()
    try {
      var indexResponse = await trainingRequest.index()
      if (indexResponse.data.length > 0) {
        let response = await trainingRequest.show(indexResponse.data[0].uuid)
        assetSuccessfulResponse(response, assert)
      }
    } catch (error) {
      console.log(error)
    }
  })
})