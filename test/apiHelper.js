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

Config.baseURL = process.env.IAIPES_API_URL
Config.headers['Authorization'] = 'Bearer ' + process.env.IAIPES_API_TOKEN

module.exports = {
  test,
  assetSuccessfulResponse
}