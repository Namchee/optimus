const _ = require('lodash')
const helper = require('./common/helper')

/**
 * Function to create booking session
 * @param {Object} allConfig Configuration object
 * @param {String} memberSessionId Member ID
 * @param {String} bookingItemId Item ID
 * @param {String} exhibitorCode Exhibitor's code
 */
const createSession = (allConfig, memberSessionId, bookingItemId, exhibitorCode) => {
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

  return helper.reqToMobileMoviesAPI('POST', url, header, body)
}

module.exports = {
  createSession
}
