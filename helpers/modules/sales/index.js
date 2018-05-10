function salesHelpers(identifiers) {

  return {
    disableHelpModalIfVisible: function() {
      const _salesPage = identifiers.elements.salesPage;

      const _closeHelpModalButton = element(by.id(_salesPage.closeHelpModalButton));

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
