/*
 * Test for EmergencyMessages Api.
 */
const wrapper = require('../index')
const { expect } = require('chai')
const testData = require('./common/testData')

describe('Compatibility Api test', () => {
  const caller = 'Optimus-Prime'
  const osType = 'IOS'
  it('getCompatibility with setting exhibitor code during method call - success', async () => {
    const client = wrapper(testData.clientConfig.prospectorClient)
    const res = await client.getCompatibility(caller, osType, testData.prospectorExhibitorCode)
    expect(res.status).to.equal(200)
    expect(res.body).to.deep.equal(testData.ResponseBody.getCompatibilityResponse)
  })

  it('getCompatibility with init exhibitor code - success', async () => {
    const client = wrapper(testData.clientConfig.prospectorClient)
    const res = await client.getCompatibility(caller, osType)
    expect(res.status).to.equal(200)
    expect(res.body).to.deep.equal(testData.ResponseBody.getCompatibilityResponse)
  })
})
