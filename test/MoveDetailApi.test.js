/*
 * Test for MovieDetailApi.
 */
const wrapper = require('../index')
const { expect } = require('chai')
const testData = require('./common/testData')

describe('MovieDetail Api test', () => {
  const response = testData.ResponseBody
  for (const [config, authToken, exhibitorCode, movieId, description, body] of [
    [
      testData.clientConfig.prospectorClient,
      undefined,
      undefined,
      '121-243084',
      'prospector (CinemaSource id)',
      response.prosector
    ],
    [testData.clientConfig.rtsDemoClient, undefined, undefined, '302568', 'rtsDemo (Internal id)', response.rtsDemo],
    [
      testData.clientConfig.prospectorClient,
      testData.prospectorToken,
      testData.prospectorExhibitorCode,
      '121-243084',
      'setting header during method call',
      response.prosector
    ]
  ]) {
    const client = wrapper(config)

    it(`getSingleMovie with ${description} - success`, async () => {
      const res = await client.getSingleMovie(movieId, testData.RequestQuery.getSingleMovie, authToken, exhibitorCode)
      expect(res.status).to.equal(200)
      expect(res.body).to.deep.equal(body.singleMovie)
    })

    it(`getNowPlaying with ${description} - success`, async () => {
      const res = await client.getNowPlaying(testData.RequestQuery.getNowPlaying, authToken, exhibitorCode)
      expect(res.status).to.equal(200)
      expect(res.body).to.deep.equal(body.nowPlaying)
    })

    it(`getComingSoon with ${description} - success`, async () => {
      const res = await client.getComingSoon(testData.RequestQuery.getComingSoon, authToken, exhibitorCode)
      expect(res.status).to.equal(200)
      expect(res.body).to.deep.equal(body.comingSoon)
    })
  }

  for (const [config, authToken, exhibitorCode, movieId, description] of [
    [
      Object.assign({}, testData.clientConfig.prospectorClient, { authToken: 'invalid_token' }),
      undefined,
      undefined,
      '121-243084',
      'invalid prospector token',
      response.prosector
    ],
    [
      Object.assign({}, testData.clientConfig.rtsDemoClient, { authToken: 'invalid_token' }),
      undefined,
      undefined,
      '302568',
      'invalid rtsDemo token',
      response.rtsDemo
    ],
    [
      testData.clientConfig.prospectorClient,
      'invalid_token',
      testData.prospectorExhibitorCode,
      '121-243084',
      'invalid method token',
      response.prosector
    ]
  ]) {
    const client = wrapper(config)
    it(`getSingleMovie with ${description} - failure`, async () => {
      try {
        await client.getSingleMovie(movieId, testData.RequestQuery.getSingleMovie, authToken, exhibitorCode)
        throw new Error('should not reach here')
      } catch (err) {
        expect(err.status).to.equal(500)
        expect(err.response.body).to.deep.equal({ message: 'Unknown Error' })
      }
    })

    it(`getNowPlaying with ${description} - failure`, async () => {
      try {
        await client.getNowPlaying(testData.RequestQuery.getNowPlaying, authToken, exhibitorCode)
        throw new Error('should not reach here')
      } catch (err) {
        expect(err.status).to.equal(500)
        expect(err.response.body).to.deep.equal({ message: 'Unknown Error' })
      }
    })

    it(`getComingSoon with ${description} - failure`, async () => {
      try {
        await client.getComingSoon(testData.RequestQuery.getNowPlaying, authToken, exhibitorCode)
        throw new Error('should not reach here')
      } catch (err) {
        expect(err.status).to.equal(500)
        expect(err.response.body).to.deep.equal({ message: 'Unknown Error' })
      }
    })
  }
})
