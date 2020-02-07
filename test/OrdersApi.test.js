/*
 * Test for OrdersApi.
 */
const wrapper = require('../index')
const { expect } = require('chai')
const testData = require('./common/testData')

describe('Orders Api test', () => {
  const orderId = '13A6C5F62FC5D99453E4'

  it('getOrderSummary with setting token during method call - success', async () => {
    const client = wrapper(testData.clientConfig.prospectorClient)
    const res = await client.getOrderSummary(orderId, testData.prospectorToken, testData.prospectorExhibitorCode)
    expect(res.status).to.equal(200)
    expect(res.body).to.deep.equal(testData.ResponseBody.getOrderSummaryResponse)
  })

  it('getOrderSummary with init token - success', async () => {
    const client = wrapper(testData.clientConfig.prospectorClient)
    const res = await client.getOrderSummary(orderId, null, null)
    expect(res.status).to.equal(200)
    expect(res.body).to.deep.equal(testData.ResponseBody.getOrderSummaryResponse)
  })

  it('getOrderSummary with invalid token - failure', async () => {
    const config = Object.assign({}, testData.clientConfig.prospectorClient, { authToken: 'invalid_token' })
    const client = wrapper(config)
    try {
      await client.getOrderSummary(orderId, null, testData.prospectorExhibitorCode)
      throw new Error('should not reach here')
    } catch (err) {
      expect(err.status).to.equal(500)
      expect(err.response.body).to.deep.equal({ message: 'Unknown Error' })
    }
  })
})
