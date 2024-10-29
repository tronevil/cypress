/*
const defineConfig = require('cypress')
module.exports =
{
//report

        //mochawesome multi report
        reporter: 'cypress-mochawesome-reporter',
        reporterOptions: {
          reportDir: 'cypress/results',
          charts: true,
          embeddedScreenshots: true,
          inlineAssets: false,
          saveAllAttempts: true,
          overwrite: true
          },

 //screen resolution
      viewportWidth: 1536,
      viewportHeight: 960,
      chromeWebSecurity: false,

        e2e:
         {
             setupNodeEvents(on, config) {
          require('cypress-mochawesome-reporter/plugin')(on)

          return config
        },
  },
}*/
const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;
module.exports = defineConfig({
  video: false,   // This enables video recording
  videosFolder: "cypress/videos", // Folder where videos will be saved
  videoCompression: 32, // Compression level (0 for no compression)
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor',cucumber())
    },
    specPattern:"cypress/e2e/features/*.feature",
    cucumberJson: {
      generate: true,
      outputFolder: "cypress/cucumber-json", // Output folder for the JSON files
      filePrefix: "",
      fileSuffix: ".cucumber"
    },
    viewportWidth: 1280,  // Set the default viewport width
    viewportHeight: 720,  // Set the default viewport height

  }
  })