const _ = require('lodash')
const helper = require('./common/helper')
const mobileMoviesLogger = require('./Logger')

/**
 * Function to get all available tickets associated with a Booking Session.
 * @param {Object} allConfig Configuration object
 * @param {String} bookingSessionId Booking session's ID
 * @param {String} exhibitorCode Exhibitor's code
 * @return {Promise}
 */
const getAvailableTickets = async (allConfig, bookingSessionId, exhibitorCode) => {
  mobileMoviesLogger.info({
    category: 'Ticketing',
    functionName: 'AvailableTickets',
    params: {
      bookingSessionId
    }
  })

  const url = `${allConfig.MOBILE_MOVIES_API_URL}/api/Ticketing/AvailableTickets/${bookingSessionId}`

  if (_.isNil(exhibitorCode)) {
    exhibitorCode = allConfig.exhibitorCode
  }

  const header = {
    'Exhibitor-Code': exhibitorCode,
    'X-Authorization': allConfig.authToken
  }

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
  getAvailableTickets
}
