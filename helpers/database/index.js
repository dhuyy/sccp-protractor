const request = require('../../../../node_modules/request-promise');

function databaseHelpers(config) {
  const _addresses = config.addresses;

  return {
    dropDatabase: function() {
      const flow = protractor.promise.controlFlow(
        `${_addresses.SERVER}${_addresses.DROP_DATABASE_ENDPOINT}`
      );

      flow.wait(request.get());
    }
  };
}

module.exports = databaseHelpers;
