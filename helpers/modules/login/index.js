function loginHelpers(config) {
  const _EC = protractor.ExpectedConditions;

  const _usernameInput = element(by.id('986fff3e-3acb-405a-ae08-a4044481b962'));
  const _passwordInput = element(by.id('9aa3d436-2a70-4480-bde8-fd04a448618f'));
  const _enterButton = element(by.id('ed133c12-8c21-4313-a55a-7cd0c772cc7f'));
  const _logOutButton = element(by.id('4aa30caf-e786-4219-8e46-50d399e03eaf'));

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
          _usernameInput.sendKeys(config.internals.roles[role].username);
          _passwordInput.sendKeys(config.internals.roles[role].password);
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
