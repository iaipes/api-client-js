const test = require('./apiHelper').test
const assetSuccessfulResponse = require('./apiHelper').assetSuccessfulResponse
const Client = require('../dist/api-client.min').ApiV1CityClient

test.group('City', (group) => {

  test('index method', async (assert) => {
    assert.plan(4)
    const client = new Client()
    try {
      let response = await client.index({
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
    const client = new Client()
    try {
      var indexResponse = await client.index()
      if (indexResponse.data.length > 0) {
        let response = await client.show(indexResponse.data[0].uuid)
        assetSuccessfulResponse(response, assert)
      }
    } catch (error) {
      console.log(error)
    }
  })
})