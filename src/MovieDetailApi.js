const _ = require('lodash')
const helper = require('./common/helper')

/**
 * Function to get single movie
 * @param {Object} allConfig Configuration object
 * @param {String} movieId The movie id
 * @param {Object} reqQuery The query object
 * @param {String} authToken The authorization token
 * @param {String} exhibitorCode The exhibitor code
 * @returns {Promise} The movie detail
 */

const getSingleMovie = (allConfig, movieId, reqQuery, authToken, exhibitorCode) => {
  const url = helper.buildUrlWithParams(`${allConfig.MOBILE_MOVIES_API_URL}/api/movies/single/${movieId}`, reqQuery)
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
 * Function to get now playing movies
 * @param {Object} allConfig Configuration object
 * @param {Object} reqQuery The query object
 * @param {String} authToken The authorization token
 * @param {String} exhibitorCode The exhibitor code
 * @returns {Promise} The now playing movie detail
 */

const getNowPlaying = (allConfig, reqQuery, authToken, exhibitorCode) => {
  const url = helper.buildUrlWithParams(`${allConfig.MOBILE_MOVIES_API_URL}/api/movies/nowplaying`, reqQuery)
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
 * Function to get coming soon movies
 * @param {Object} allConfig Configuration object
 * @param {Object} reqQuery The query object
 * @param {String} authToken The authorization token
 * @param {String} exhibitorCode The exhibitor code
 * @returns {Promise} The coming soon movie detail
 */

const getComingSoon = (allConfig, reqQuery, authToken, exhibitorCode) => {
  const url = helper.buildUrlWithParams(`${allConfig.MOBILE_MOVIES_API_URL}/api/movies/comingsoon`, reqQuery)
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
  getSingleMovie,
  getNowPlaying,
  getComingSoon
}
