const _ = require('lodash')
const helper = require('./common/helper')
const mobileMoviesLogger = require('./Logger')

/**
 * Returns the seating layout for the screening associated with the supplied bookingSessionId.
 * @param {Object} allConfig Configuration object
 * @param {String} bookingSessionId Booking session's ID
 * @param {String} exhibitorCode Exhibitor's code
 * @return {Promise}
 */

const getLayouts = async (allConfig, bookingSessionId, exhibitorCode) => {
  mobileMoviesLogger.info({
    category: 'Seating',
    functionName: 'GetLayout',
    params: {
      bookingSessionId
    }
  })

  const url = `${allConfig.MOBILE_MOVIES_API_URL}/api/Seating/GetLayout/${bookingSessionId}`

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

const selectSeat = async (allConfig, bookingSessionId, id, exhibitorCode) => {
  mobileMoviesLogger.info({
    category: 'Seating',
    functionName: 'SelectSeat',
    params: {
      id,
      bookingSessionId
    }
  })
  const url = `${allConfig.MOBILE_MOVIES_API_URL}/api/Seating/SelectSeats`

  if (_.isNil(exhibitorCode)) {
    exhibitorCode = allConfig.exhibitorCode
  }
  const header = {
    'Exhibitor-Code': exhibitorCode,
    'X-Authorization': allConfig.authToken
  }
  const body = {
    selectedSeats: [
      {
        id
      }
    ],
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
  getLayouts,
  selectSeat
}
