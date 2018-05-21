function productsHelpers(identifiers) {
  const _productsPage = identifiers.elements.registersMenu.productsPage;

  return {
    linkSalesPartNumberInProductPage: function(salesPartNumberName) {
      let optionFound;

      element(by.id(_productsPage.products.linkSalesPartNumberButton)).click();
      element(by.id(_productsPage.products.addSalesPartNumberModalButton)).click();
      element(by.id(_productsPage.products.salesPartNumberModalSelect)).click();

      optionFound = element(by.cssContainingText('.ui-select-choices-row', salesPartNumberName));

      browser.executeScript('arguments[0].focus()', optionFound);

      optionFound.click();

      element(by.id(_productsPage.products.confirmLinkSalesPartNumberButton)).click();
      element(by.id(identifiers.elements.general.overlay)).click();
      element(by.id(_productsPage.products.confirmAddNewProductButton)).click();
    }
  };
}

module.exports = productsHelpers;
