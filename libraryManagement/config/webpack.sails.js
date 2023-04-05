let webpackConfig = require('../webpack.config');

// If mode is production then the UI Assets will be built in postinstall step.
// If mode is development then the UI Assets will be built and watched using the sails webpack hook.
let customConfig = {
  production: true
};

if (process.env.NODE_ENV !== 'production') {
  customConfig.production = false;
}

module.exports.webpack = webpackConfig(customConfig);