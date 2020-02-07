const _ = require('lodash')
const helper = require('./common/helper')

/**
 * Function to get theaters
 * @param {Object} allConfig Configuration object
 * @param {Object} reqQuery The query object
 * @param {String} authToken The authorization token
 * @param {String} exhibitorCode The exhibitor code
 * @returns {Promise} The theaters
 */
const getTheaters = (allConfig, reqQuery, authToken, exhibitorCode) => {
  const url = helper.buildUrlWithParams(`${allConfig.MOBILE_MOVIES_API_URL}/api/theaters`, reqQuery)
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

/**
 * Function to get single theater
 * @param {Object} allConfig Configuration object
 * @param {String} theaterId The theater id
 * @param {Object} reqQuery The query object
 * @param {String} authToken The authorization token
 * @param {String} exhibitorCode The exhibitor code
 * @returns {Promise} The theater detail
 */
const getSingleTheater = (allConfig, theaterId, reqQuery, authToken, exhibitorCode) => {
  const url = helper.buildUrlWithParams(`${allConfig.MOBILE_MOVIES_API_URL}/api/theaters/single/${theaterId}`, reqQuery)
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
  getTheaters,
  getSingleTheater
}
