function mainHelpers(config) {
  const _menus = config.elements.components.menus;
  const _submenus = config.elements.components.submenus;

  return {
    openWebPage: function() {
      browser.get(config.addresses.CLIENT);
    },

    openMenu: function(menuNameParam) {
      let menuElement = _menus.filter(menu => menuNameParam === menu.name)[0];

      if (menuElement) {
        element(by.id(menuElement.id)).click();
      }
    },

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
    }
  };
}

module.exports = mainHelpers;
