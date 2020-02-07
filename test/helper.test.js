const { expect } = require('chai')
const helper = require('../src/common/helper')

describe('helper test', () => {
  it('reqToMobileMoviesAPI test with invalid req type - failure', async () => {
    try {
      await helper.reqToMobileMoviesAPI('invalid_request', '', {})
      throw new Error('should not reach here')
    } catch (err) {
      expect(err.message).to.equal('Invalid request type')
    }
  })

  it('buildUrlWithParams with invalid params - success', () => {
    const url = 'https://www.google.com'
    const res = helper.buildUrlWithParams(url, undefined)
    expect(res).to.equal(url)
  })
})
