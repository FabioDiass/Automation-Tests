const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {

    baseUrl: 'https://practice.automationtesting.in/',
    viewportHeight: 900,
    viewportWidth: 1440,

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
