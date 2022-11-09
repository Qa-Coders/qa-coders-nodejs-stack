const server = require('./config/server')
require('./config/setup')
require('./config/routes')(server)