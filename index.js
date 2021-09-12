'use strict';

const { name, version } = require('./package');

module.exports = {
  name,
  version,

  locals(options) {
    /**
      * This blueprint is intended for addons, but it can be used with apps with
      * minimal tweaking
      */
    let isAddon = options.project.isEmberCLIAddon();

    return {
      isAddon,
      automatedCiVersion: version,
    };
  }
};
