/**
 * Config constants
 */
const config = require('./config');

/**
 * Main helpers
 */
const {
  openWebPage,
  openMenu,
  selectSubmenu,
  isMenuVisible
} = require('./helpers/main')(config);

/**
 * Database helpers
 */
const {
  dropDatabase
} = require('./helpers/database')(config);

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
  openWebPage,
  openMenu,
  selectSubmenu,
  isMenuVisible,

  dropDatabase,

  logInWithUsernameAndPassword,
  logInWithRole,
  logOut,

  disableHelpModalIfVisible
};
