const { defineConfig } = require("cypress");

module.exports = defineConfig({
  pageLoadTimeout: 120000,

  e2e: {
    setupNodeEvents(on, config) {
      // hier können später Plugins hinzugefügt werden
    },
  },
});