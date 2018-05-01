/**
 * Config constants
 */
const config = require('./config');

/**
 * Main helpers
 */
const {
  openMenu
} = require('./helpers/main')(config);

/**
 * Login module helpers
 */
const {
  logInWithUsernameAndPassword,
  logInWithRole,
  logOut
} = require('./helpers/modules/login')(config);

module.exports = {
  config: config.constants,
  logInWithUsernameAndPassword,
  logInWithRole,
  logOut,
  openMenu
};
