function mainHelpers(config) {
  return {
    openMenu: function(menuNameParam) {
      const menus = config.internals.menus;
      let menuElement = menus.filter(menu => menuNameParam === menu.name);

      if (menuElement[0]) {
        element(by.id(menuElement.id)).click();
      }
    },

    selectSubmenu: function(submenuNameParam) {
      const submenus = config.internals.submenus;
      let submenuElement = submenus.filter(submenu => submenuNameParam === submenu.name);

      if (submenuElement[0]) {
        element(by.id(submenuElement.id)).click();
      }
    }
  };
}

module.exports = mainHelpers;
