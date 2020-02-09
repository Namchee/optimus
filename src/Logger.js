const bunyan = require('bunyan')
const mobileMoviesLogger = bunyan.createLogger({ name: 'mobile_movies_api_logger' })

module.exports = mobileMoviesLogger
