const request = require('request-promise');

function databaseHelpers(identifiers) {
  const _addresses = identifiers.addresses;

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
