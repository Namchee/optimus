/*
 * Test for EmergencyMessages Api.
 */
const wrapper = require('../index')
const { expect } = require('chai')
const testData = require('./common/testData')

describe('EmergencyMessages Api test', () => {
  it('getEmergencyMessages with setting token during method call - success', async () => {
    const client = wrapper(testData.clientConfig.prospectorClient)
    const res = await client.getEmergencyMessages(testData.RequestQuery.getEmergencyMessages, testData.prospectorToken, testData.prospectorExhibitorCode)
    expect(res.status).to.equal(200)
    expect(res.body).to.deep.equal(testData.ResponseBody.getEmergencyMessagesResponse)
  })

  it('getEmergencyMessages with init token - success', async () => {
    const client = wrapper(testData.clientConfig.prospectorClient)
    const res = await client.getEmergencyMessages(testData.RequestQuery.getEmergencyMessages, null, null)
    expect(res.status).to.equal(200)
    expect(res.body).to.deep.equal(testData.ResponseBody.getEmergencyMessagesResponse)
  })

  it('getEmergencyMessages with invalid token - failure', async () => {
    const config = Object.assign({}, testData.clientConfig.prospectorClient, { authToken: 'invalid_token' })
    const client = wrapper(config)
    try {
      await client.getEmergencyMessages(testData.RequestQuery.getEmergencyMessages, null, testData.prospectorExhibitorCode)
      throw new Error('should not reach here')
    } catch (err) {
      expect(err.status).to.equal(500)
      expect(err.response.body).to.deep.equal({ message: 'Unknown Error' })
    }
  })
})
