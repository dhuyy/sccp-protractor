function customerHelpers(identifiers) {
  const _customerPage = identifiers.elements.registersMenu.customerPage;

  return {
    linkPartNumberInCustomerPage: function(partNumberName) {
      let optionFound;

      element(by.id(_customerPage.linkPartNumberButton)).click();
      element(by.id(_customerPage.addPartNumberModalButton)).click();
      element(by.id(_customerPage.partNumberModalSelect)).click();

      optionFound = element(by.cssContainingText('.ui-select-choices-row', partNumberName));

      browser.executeScript('arguments[0].focus()', optionFound);

      optionFound.click();

      element(by.id(_customerPage.confirmLinkPartNumberButton)).click();
      element(by.id(identifiers.elements.general.overlay)).click();
      element(by.id(_customerPage.confirmAddNewCustomerButton)).click();
    }
  };
}

module.exports = customerHelpers;
