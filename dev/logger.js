const bunyan = require('bunyan')
const devConsole = bunyan.createLogger({ name: 'proif_dev_logger' })

module.exports = devConsole
