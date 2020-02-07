const _ = require('lodash')
const helper = require('./common/helper')

/**
 * Function to get compatibility information
 * @param {Object} allConfig Configuration object
 * @param {String} caller The caller
 * @param {String} osType The os type
 * @param {String} exhibitorCode The exhibitor code
 * @returns {Promise} Compatibility information
 */

const getCompatibility = (allConfig, caller, osType, exhibitorCode) => {
  const url = `${allConfig.MOBILE_MOVIES_API_URL}/api/compatibility`
  if (_.isNil(exhibitorCode)) {
    exhibitorCode = allConfig.exhibitorCode
  }
  const header = {
    'Exhibitor-Code': exhibitorCode,
    Caller: caller,
    'Os-Type': osType
  }
  return helper.reqToMobileMoviesAPI('GET', url, header)
}

module.exports = {
  getCompatibility
}
