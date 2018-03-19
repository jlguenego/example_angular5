const config = require('../../webpack.config.js');
const path = require('path');

config.context = path.resolve(__dirname, '.');
config.output.path = path.resolve(__dirname, './wpk');
module.exports = config;