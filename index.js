/**
 * Identifiers
 */
let identifiers;

if (process.env.SCCP_PROTRACTOR_ENV === 'DEV') {
  identifiers = require('../identifiers');
}

if (process.env.SCCP_PROTRACTOR_ENV === 'PROD') {
  identifiers = require('../../identifiers');
}

/**
 * Main helpers
 */
const {
  openWebPage,
  openMenu,
  closeMenu,
  selectSubmenu,
  isMenuVisible,
  isSubmenuVisible
} = require('./helpers/main')(identifiers);

/**
 * Database helpers
 */
const {
  dropDatabase
} = require('./helpers/database')(identifiers);

/**
 * Login module helpers
 */
const {
  logInWithUsernameAndPassword,
  logInWithRole,
  logOut
} = require('./helpers/modules/login')(identifiers);

/**
 * Registers > Periods module helpers
 */
const {
  addPeriods
} = require('./helpers/modules/registers/periods')(identifiers);

/**
 * Sales module helpers
 */
const {
  disableHelpModalIfVisible
} = require('./helpers/modules/sales')(identifiers);

module.exports = {
  openWebPage,
  openMenu,
  closeMenu,
  selectSubmenu,
  isMenuVisible,
  isSubmenuVisible,

  dropDatabase,

  logInWithUsernameAndPassword,
  logInWithRole,
  logOut,

  addPeriods,

  disableHelpModalIfVisible
};
