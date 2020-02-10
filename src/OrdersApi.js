const _ = require('lodash')
const helper = require('./common/helper')
const mobileMoviesLogger = require('./Logger')

/**
 * Function to get order summary
 * @param {Object} allConfig Configuration object
 * @param {String} orderId The order id
 * @param {String} authToken The authorization token
 * @param {String} exhibitorCode The exhibitor code
 * @returns {Promise} The order summary
 */

const getOrderSummary = (allConfig, orderId, authToken, exhibitorCode) => {
  const url = `${allConfig.MOBILE_MOVIES_API_URL}/api/orders/summary/${orderId}`
  if (_.isNil(authToken)) {
    authToken = allConfig.authToken
  }
  if (_.isNil(exhibitorCode)) {
    exhibitorCode = allConfig.exhibitorCode
  }
  const header = {
    Authorization: `Basic ${authToken}`,
    'Exhibitor-Code': exhibitorCode
  }
  return helper.reqToMobileMoviesAPI('GET', url, header)
}

const getBookingSession = async (allConfig, bookingSessionId, exhibitorCode) => {
  mobileMoviesLogger.info({
    category: 'Orders',
    functionName: 'getBookingSession',
    param: {
      bookingSessionId
    }
  })
  if (_.isNil(exhibitorCode)) {
    exhibitorCode = allConfig.exhibitorCode
  }
  const header = {
    'Exhibitor-Code': exhibitorCode,
    'X-Authorization': allConfig.authToken
  }
  const url = `${allConfig.MOBILE_MOVIES_API_URL}/api/orders/BookingSession/${bookingSessionId}`
  try {
    const response = await helper.reqToMobileMoviesAPI('GET', url, header)

    mobileMoviesLogger.info(response.status)

    return response
  } catch (err) {
    mobileMoviesLogger.error(err.status)

    throw err
  }
}
module.exports = {
  getOrderSummary,
  getBookingSession
}
