function periodsHelpers(identifiers) {
  const _periodsPage = identifiers.elements.registersMenu.periodsPage;

  const _addPeriodButton = element(by.id(_periodsPage.addPeriodButton));

  return {
    addPeriods: function(quantity) {
      if (!quantity || quantity === 0) {
        _addPeriodButton.click();
      } else {
        for (let i = 0; i < quantity; i++) {
          _addPeriodButton.click();
        }
      }
    }
  };
}

module.exports = periodsHelpers;
