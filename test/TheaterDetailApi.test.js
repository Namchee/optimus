/*
 * Test for TheaterDetailApi.
 */
const wrapper = require('../index')
const { expect } = require('chai')
const testData = require('./common/testData')

describe('TheaterDetail Api test', () => {
  const response = testData.ResponseBody
  for (const [config, authToken, exhibitorCode, description, body] of [
    [testData.clientConfig.prospectorClient, undefined, undefined, 'prospector', response.prosector],
    [testData.clientConfig.rtsDemoClient, undefined, undefined, 'rtsDemo', response.rtsDemo],
    [testData.clientConfig.cinemaWestClient, undefined, undefined, 'cinemaWest', response.cinemaWest],
    [testData.clientConfig.bandBClient, undefined, undefined, 'bandB', response.bandB],
    [testData.clientConfig.prospectorClient, testData.prospectorToken, testData.prospectorExhibitorCode, 'setting header during method call', response.prosector]
  ]) {
    it(`getTheaters with ${description} - success`, async () => {
      const client = wrapper(config)
      const res = await client.getTheaters(testData.RequestQuery.getTheaters, authToken, exhibitorCode)
      expect(res.status).to.equal(200)
      expect(res.body).to.deep.equal(body.theaters)
    })

    it(`getSingleTheater with ${description} - success`, async () => {
      const client = wrapper(config)
      const theaterId = '7871'
      const res = await client.getSingleTheater(
        theaterId,
        testData.RequestQuery.getSingleTheater,
        authToken, exhibitorCode
      )
      expect(res.status).to.equal(200)
      expect(res.body).to.deep.equal(body.singleTheater)
    })
  }

  for (const [config, authToken, exhibitorCode, description] of [
    [Object.assign({}, testData.clientConfig.prospectorClient, { authToken: 'invalid_token' }), undefined, undefined, 'invalid prospector token'],
    [Object.assign({}, testData.clientConfig.rtsDemoClient, { authToken: 'invalid_token' }), undefined, undefined, 'invalid rtsDemo token'],
    [Object.assign({}, testData.clientConfig.cinemaWestClient, { authToken: 'invalid_token' }), undefined, undefined, 'invalid cinemaWest token'],
    [Object.assign({}, testData.clientConfig.bandBClient, { authToken: 'invalid_token' }), undefined, undefined, 'invalid bandB token'],
    [testData.clientConfig.prospectorClient, 'invalid_token', testData.prospectorExhibitorCode, 'invalid method token']
  ]) {
    it(`getTheaters with ${description} - failure`, async () => {
      const client = wrapper(config)
      try {
        await client.getTheaters(testData.RequestQuery.getTheaters, authToken, exhibitorCode)
        throw new Error('should not reach here')
      } catch (err) {
        expect(err.status).to.equal(500)
        expect(err.response.body).to.deep.equal({ message: 'Unknown Error' })
      }
    })

    it(`getSingleTheater with ${description} - failure`, async () => {
      const client = wrapper(config)
      const theaterId = 7871
      try {
        await client.getSingleTheater(
          theaterId,
          testData.RequestQuery.getSingleTheater,
          authToken, exhibitorCode
        )
        throw new Error('should not reach here')
      } catch (err) {
        expect(err.status).to.equal(500)
        expect(err.response.body).to.deep.equal({ message: 'Unknown Error' })
      }
    })
  }
})
