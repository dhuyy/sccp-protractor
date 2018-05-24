function mainHelpers(identifiers) {
  let _firstTimeOpeningWebPage = true;
  const _menus = identifiers.elements.general.menus;
  const _submenus = identifiers.elements.general.submenus;

  function _openOrCloseMenu(menuNameParam) {
    let menuElement = _menus.filter(menu => menuNameParam === menu.name)[0];

    if (menuElement) {
      element(by.id(menuElement.id)).click();
    }
  }

  return {
    openWebPage: function() {
      if (_firstTimeOpeningWebPage) {
        if (process.env.SCCP_PROTRACTOR_ENV === 'CI') {
          browser.driver.get(identifiers.addresses.CI.CLIENT);
        } else {
          browser.driver.get(identifiers.addresses.DEV.CLIENT);
        }

        _firstTimeOpeningWebPage = false;
      }
    },

    openMenu: _openOrCloseMenu,
    closeMenu:  _openOrCloseMenu,

    selectSubmenu: function(submenuNameParam) {
      let submenuElement = _submenus.filter(submenu => submenuNameParam === submenu.name)[0];

      if (submenuElement) {
        element(by.id(submenuElement.id)).click();
      }
    },

    isMenuVisible: function(menuNameParam) {
      const selectedMenu = _menus.filter(menu => {
        return menu.name === menuNameParam;
      })[0];

      return element(by.id(selectedMenu.id)).isPresent();
    },

    isSubmenuVisible: function(submenuNameParam) {
      const selectedSubmenu = _submenus.filter(submenus => {
        return submenus.name === submenuNameParam;
      })[0];

      return element(by.id(selectedSubmenu.id)).isPresent();
    }
  };
}

module.exports = mainHelpers;
