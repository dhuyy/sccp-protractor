function salesHelpers(identifiers) {

  return {
    disableHelpModalIfVisible: function() {
      const _dataForecastPage = identifiers.elements.salesMenu.dataForecastPage;

      const _closeHelpModalButton = element(by.id(_dataForecastPage.closeHelpModalButton));

      _closeHelpModalButton.isDisplayed()
        .then(isVisible => {
          if (isVisible) {
            _closeHelpModalButton.click();
          }

          return isVisible;
        });
    }
  };
}

module.exports = salesHelpers;
