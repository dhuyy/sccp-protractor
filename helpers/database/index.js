const request = require('request-promise');

function databaseHelpers(config) {
  const _addresses = config.addresses;

  return {
    dropDatabase: function() {
      const flow = protractor.promise.controlFlow();

      flow.wait(request.get(
        `${_addresses.SERVER}${_addresses.DROP_DATABASE_ENDPOINT}`
      ));
    }
  };
}

module.exports = databaseHelpers;
