/**
 * Identifiers
 */
let identifiers;
let ENV = process.env.SCCP_PROTRACTOR_ENV;

if (ENV === 'DEV') {
  identifiers = require('../identifiers');
}

if ((ENV === 'CI') || (ENV === 'PROD')) {
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
 * Registers > Products module helpers
 */
const {
  linkSalesPartNumberInProductPage
} = require('./helpers/modules/registers/products/products')(identifiers);

/**
 * Registers > Customer module helpers
 */
const {
  linkPartNumberInCustomerPage
} = require('./helpers/modules/registers/customer')(identifiers);

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

  linkSalesPartNumberInProductPage,

  linkPartNumberInCustomerPage,

  disableHelpModalIfVisible
};
