const querystring = require('querystring')
const request = require('superagent')

/**
 * Function to send request to Mobile Movies API
 * @param {String} reqType Type of the request GET
 * @param {String} path Complete path of the API URL
 * @param {Object} header Http header(includes Authorization header, Exhibitor-Code header etc.)
 * @param {Object} body Http request body for any request which requires request body
 * @returns {Promise}
 */
const reqToMobileMoviesAPI = async (reqType, path, header, body) => {
  // Based on request type perform necessary action
  switch (reqType) {
    case 'GET':
      return request
        .get(path)
        .set(header)
        .set('Content-Type', 'application/json')
        .send()
    case 'POST':
      return request
        .post(path)
        .set(header)
        .send(body)
    default:
      throw new Error('Invalid request type')
  }
}

/**
 * Function to build URL with query parameters
 * @param {String} url Bus API URL
 * @param {Object} params Query parameters
 * @returns {String} URL with query parameters
 */
const buildUrlWithParams = (url, params) => {
  let queryParams = ''
  if (params) {
    queryParams = querystring.stringify(params)
  }
  return queryParams === '' ? url : `${url}?${queryParams}`
}

module.exports = {
  buildUrlWithParams,
  reqToMobileMoviesAPI
}
