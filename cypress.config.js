const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern:'cypress/integration/examples/*.js',
    viewportHeight:800,
    viewportWidth:1200,
    projectId: "4w3tue"

  },
  
  
})
