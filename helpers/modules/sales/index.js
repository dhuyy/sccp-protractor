function salesHelpers(config) {

  const _delayBootstrapModal = 1000; // Delay to the Twitter Bootstrap Modal open and close;

  return {
    disableHelpModalIfVisible: function() {
      browser.sleep(_delayBootstrapModal);

      const _salesPage = config.elements.salesPage;

      const _showWhenOpenedSelect = element(by.id(_salesPage.showWhenOpenedSelect));
      const _closeHelpModalButton = element(by.id(_salesPage.closeHelpModalButton));

      _showWhenOpenedSelect.isDisplayed()
        .then(isVisible => {
          if (isVisible) {
            _showWhenOpenedSelect.click();
            _closeHelpModalButton.click();

            browser.sleep(_delayBootstrapModal);
          }

          return isVisible;
        });
    }
  };
}

module.exports = salesHelpers;
