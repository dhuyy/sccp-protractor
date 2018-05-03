/**
 * Config constants
 */
const config = require('./config');

/**
 * Main helpers
 */
const {
  openMenu,
  selectSubmenu,
  isMenuVisible
} = require('./helpers/main')(config);

/**
 * Login module helpers
 */
const {
  logInWithUsernameAndPassword,
  logInWithRole,
  logOut
} = require('./helpers/modules/login')(config);

/**
 * Sales module helpers
 */
const {
  disableHelpModalIfVisible
} = require('./helpers/modules/sales')(config);

module.exports = {
  config: config.constants,
  logInWithUsernameAndPassword,
  logInWithRole,
  logOut,
  openMenu,
  selectSubmenu,
  isMenuVisible,
  disableHelpModalIfVisible
};
