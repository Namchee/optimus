const _ = require('lodash')
const helper = require('./common/helper')
const mobileMoviesLogger = require('./Logger')

/**
 * Function to create booking session
 * @param {Object} allConfig Configuration object
 * @param {String} memberSessionId Member ID
 * @param {String} bookingItemId Item ID
 * @param {String} exhibitorCode Exhibitor's code
 * @return {Promise}
 */
const createSession = async (allConfig, memberSessionId, bookingItemId, exhibitorCode) => {
  mobileMoviesLogger.info({
    category: 'Booking',
    functionName: 'CreateSession',
    params: {
      memberSessionId,
      bookingItemId
    }
  })

  const url = `${allConfig.MOBILE_MOVIES_API_URL}/api/Booking/CreateSession`

  if (_.isNil(exhibitorCode)) {
    exhibitorCode = allConfig.exhibitorCode
  }

  const header = {
    'Exhibitor-Code': exhibitorCode,
    'X-Authorization': allConfig.authToken
  }

  const body = {
    memberSessionId,
    bookingItem: {
      id: bookingItemId,
      bookingItemType: 'Showtime'
    }
  }

  try {
    const response = await helper.reqToMobileMoviesAPI('POST', url, header, body)

    mobileMoviesLogger.info(response.status)

    return response
  } catch (err) {
    mobileMoviesLogger.error(err.status)

    throw err
  }
}

const complete = async (allConfig, paymentProviderValues, customerDetails, bookingSessionId, exhibitorCode) => {
  mobileMoviesLogger.info({
    category: 'Booking',
    functionName: 'Complete',
    params: {
      paymentProviderValues,
      customerDetails,
      bookingSessionId
    }
  })

  const url = `${allConfig.MOBILE_MOVIES_API_URL}/api/Booking/Complete`

  if (_.isNil(exhibitorCode)) {
    exhibitorCode = allConfig.exhibitorCode
  }

  const header = {
    returnOrderDetail: true,
    'Exhibitor-Code': exhibitorCode,
    'X-Authorization': allConfig.authToken
  }

  const body = {
    paymentProviderValues:
    {
      additionalProp1,
      additionalProp2,
      additionalProp3
    },
    customerDetails:
    {
      name,
      email
    },
    bookingSessionId
  }

  try {
    const response = await helper.reqToMobileMoviesAPI('POST', url, header, body)

    mobileMoviesLogger.info(response.status)

    return response
  } catch (err) {
    mobileMoviesLogger.error(err.status)

    throw err
  }
}

module.exports = {
  createSession,
  complete
}
