function loginHelpers(identifiers) {
  const _EC = protractor.ExpectedConditions;

  const _loginPage = identifiers.elements.loginPage;

  const _usernameInput = element(by.id(_loginPage.usernameInput));
  const _passwordInput = element(by.id(_loginPage.passwordInput));
  const _enterButton = element(by.id(_loginPage.enterButton));
  const _logOutButton = element(by.id(_loginPage.logOutButton));

  return {
    logInWithUsernameAndPassword: function(username, password) {
      browser.wait(_EC.visibilityOf(_usernameInput))
        .then(function() {
          _usernameInput.sendKeys(username);
          _passwordInput.sendKeys(password);
          _enterButton.click();
        });
    },

    logInWithRole: function(role) {
      browser.wait(_EC.visibilityOf(_usernameInput))
        .then(function() {
          _usernameInput.sendKeys(identifiers.roles[role].username);
          _passwordInput.sendKeys(identifiers.roles[role].password);
          _enterButton.click();
        });
    },

    logOut: function() {
      browser.wait(_EC.elementToBeClickable(_logOutButton))
        .then(function() {
          _logOutButton.click();
        });
    }
  };
}

module.exports = loginHelpers;
