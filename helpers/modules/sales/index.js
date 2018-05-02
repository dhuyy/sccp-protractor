function salesHelpers(config) {
  return {
    disableHelpModalIfVisible: function() {
      browser.sleep(1000); // Time to bootstrap modal open

      const showWhenOpenedSelect = element(by.id('80b1187d-4958-47c9-8e07-51dba8807d75'));
      const closeHelpModalButton = element(by.id('5921aace-0d81-4cd7-a47c-9ee11a41e7ef'));

      showWhenOpenedSelect.isDisplayed()
        .then(isVisible => {
          if (isVisible) {
            showWhenOpenedSelect.click();
            closeHelpModalButton.click();
          }

          return isVisible;
        });
    }
  };
}

module.exports = salesHelpers;
