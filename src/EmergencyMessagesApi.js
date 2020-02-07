const _ = require('lodash')
const helper = require('./common/helper')

/**
 * Function to get emergency messages
 * @param {Object} allConfig Configuration object
 * @param {Object} reqQuery The query object
 * @param {String} authToken The authorization token
 * @param {String} exhibitorCode The exhibitor code
 * @returns {Promise} Emergency Messages
 */

const getEmergencyMessages = (allConfig, reqQuery, authToken, exhibitorCode) => {
  const url = helper.buildUrlWithParams(`${allConfig.MOBILE_MOVIES_API_URL}/api/emergency`, reqQuery)
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

module.exports = {
  getEmergencyMessages
}
