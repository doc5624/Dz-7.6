const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    retries: 2,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    viewportHeight: 1920,
    viewportWidth: 1080,
    setupNodeEvents(on, config) {},
  },
});
