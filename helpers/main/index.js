function mainHelpers(config) {
  return {
    openMenu: function openMenu(name) {
      const listOfMenuNames = config.internals.menus;
      let menuElement = null;

      if ((name === listOfMenuNames.registers[0]) || (name === listOfMenuNames.registers[1])) {
        menuElement = element(by.id('fd5acbb8-91c7-4ec2-8164-6c325205470a'));
      }

      if ((name === listOfMenuNames.capacities[0]) || (name === listOfMenuNames.capacities[1])) {
        menuElement = element(by.id('fa92cc76-2ae0-4ec2-b712-d00afb68674a'));
      }

      if ((name === listOfMenuNames.inputOutput[0])) {
        menuElement = element(by.id('57d83201-5cdd-4294-9cea-01a58c80e21a'));
      }

      if ((name === listOfMenuNames.simulation[0]) || (name === listOfMenuNames.simulation[1])) {
        menuElement = element(by.id('b9159de1-3b29-4c18-9c00-4e519cc3e416'));
      }

      if ((name === listOfMenuNames.settings[0]) || (name === listOfMenuNames.settings[1])) {
        menuElement = element(by.id('8c7d86de-75dd-4fc6-b6f9-53486dfa6d3b'));
      }

      if ((name === listOfMenuNames.sales[0]) || (name === listOfMenuNames.sales[1])) {
        menuElement = element(by.id('004d711f-00a7-4997-8437-b248ad783c20'));
      }

      if (menuElement !== null) {
        menuElement.click();
      }
    }
  };
}

module.exports = mainHelpers;
