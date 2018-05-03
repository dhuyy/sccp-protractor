function mainHelpers(config) {
  return {
    openMenu: function(menuNameParam) {
      const menus = config.internals.menus;
      let menuElement = menus.filter(menu => menuNameParam === menu.name)[0];

      if (menuElement) {
        element(by.id(menuElement.id)).click();
      }
    },

    selectSubmenu: function(submenuNameParam) {
      const submenus = config.internals.submenus;
      let submenuElement = submenus.filter(submenu => submenuNameParam === submenu.name)[0];

      if (submenuElement) {
        element(by.id(submenuElement.id)).click();
      }
    },

    isMenuVisible: function(menuNameParam) {
      const selectedMenu = config.internals.menus.filter(menu => {
        return menu.name === menuNameParam;
      })[0];

      return element(by.id(selectedMenu.id)).isPresent();
    }
  };
}

module.exports = mainHelpers;
