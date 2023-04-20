const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");
//to activate the sql server
const sqlServer = require('cypress-sql-server');
//to activate the visual testing
const { initPlugin } = require('cypress-plugin-snapshots/plugin');
//this is required for Excel to JSON conversion
const excelToJson = require('convert-excel-to-json');
const fs = require('fs');


async function setupNodeEvents(on, config) {

  //to activate the visual testing
  initPlugin(on, config);

  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  //Below lines is for activating the sql server
  //https://www.npmjs.com/package/cypress-sql-server
  config.db = {
    userName: "testdbuser",
    password: "Scott@123",
    server: "iotestdb.database.windows.net",
    options: {
      database: "testdb",
      encrypt: true,
      rowCollectionOnRequestCompletion: true
    }
  }
  tasks = sqlServer.loadDBPlugin(config.db);
  on('task', tasks);

  //Below is required to use NodeJS instead of brower to read the file
  on('task',{

    excelToJsonConverter(filePath)
    {
      const result = excelToJson({
      source: fs.readFileSync(filePath) // fs.readFileSync return a Buffer
    });
    return result;
    }
})


  //on('file:preprocessor', cucumber())
  on("file:preprocessor", browserify.default(config));


  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}
module.exports = defineConfig({

  defaultCommandTimeout: 6000,

  env: {
    userName:"cypress.config.js",
    password: "cypress.config.js-password",
    url: "https://rahulshettyacademy.com",
    apiPost: "http://216.10.245.166/Library/Addbook.php",
    apiGet: "http://216.10.245.166/Library/GetBook.php?ID=4oy89178674",
    allStatuscode: {
      statusCodeSuccessA: 200,
    },
    allcode: {
      statusCodeSuccessA: 200,
    },
    "cypress-plugin-snapshots": {
      imageConfig: {
        threshold: 0.01
      }
    }

  },
  retries: {
    runMode: 1,

  },
  //Cypress Cloud, project CypressCodeCertifier
  projectId: "ac7j1u",
  viewportHeight: 1080,
  viewportWidth: 1920,
  experimentalStudio: true,
  e2e: {
    setupNodeEvents,
    specPattern: [
      'cypress/integration/examples/**/*.feature'
    ],
    //to activate the visual testing
    excludeSpecPattern: [
      "**/__snapshots__/*",
      "**/__image_snapshots__/*"
    ],
  },

});

