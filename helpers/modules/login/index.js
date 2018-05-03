function loginHelpers(config) {
  const _EC = protractor.ExpectedConditions;

  return {
    logInWithUsernameAndPassword: function(username, password) {
      const usernameInput = element(by.id('986fff3e-3acb-405a-ae08-a4044481b962'));

      browser.wait(_EC.visibilityOf(usernameInput))
        .then(function() {
          element(by.id('986fff3e-3acb-405a-ae08-a4044481b962'))
            .sendKeys(username);
          element(by.id('9aa3d436-2a70-4480-bde8-fd04a448618f'))
            .sendKeys(password);

          element(by.id('ed133c12-8c21-4313-a55a-7cd0c772cc7f')).click();
        });
    },

    logInWithRole: function(role) {
      const usernameInput = element(by.id('986fff3e-3acb-405a-ae08-a4044481b962'));

      browser.wait(_EC.visibilityOf(usernameInput))
        .then(function() {
          usernameInput.sendKeys(config.internals.roles[role].username);

          element(by.id('9aa3d436-2a70-4480-bde8-fd04a448618f'))
            .sendKeys(config.internals.roles[role].password);

          element(by.id('ed133c12-8c21-4313-a55a-7cd0c772cc7f')).click();
        });
    },

    logOut: function() {
      const logOutButton = element(by.id('4aa30caf-e786-4219-8e46-50d399e03eaf'));

      browser.wait(_EC.elementToBeClickable(logOutButton))
        .then(function() {
          logOutButton.click();
        });
    }
  };
}

module.exports = loginHelpers;
