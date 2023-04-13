# Why Cypress
https://npmtrends.com/cypress
https://www.cypress.io/how-it-works/
https://docs.cypress.io/guides/references/changelog

Framework Architectre for UI/API/ETL
====================
Javascript executes its code in async mode and cypress run in sync mode. Whenever we code has combined code, need to resolve promise/call function. Javascripts functions which requires promises are text(), trim()

As a rule of thumb anything you call from Cypress affects global state. Anything you call from cy affects local state.

The following documentation describes a structures, common code and configuratin requires 

# Tech stack

* Cypress
* cypress-cucumber-preprocessor
* mocha
* chai
* npm
* npx
* ESLint
* cypress-sql-server

## Visual Testing
Below two link used to setup the plugs
https://github.com/meinaart/cypress-plugin-snapshots
https://github.com/meinaart/cypress-plugin-snapshots/issues/54

## javascript
Code uses javascript way of writing. Core javascript function needs to resolve the promise using then keywords
example 
cy.get('h3 strong').then(function (element) {
      const amount = element.text()

## Sql Server
* 1 Download the sql server using
npm install --save-dev cypress-sql-server
* 2 Initialize the plug-in in cyress.config.js under setupNodeEvents
* 3 In e2e.js add below two lines
import sqlServer from 'cypress-sql-server';
sqlServer.loadDBCommands();

## Npm

`Npm`, the node package manager is used to manage dependencies which are described in its `package.json`. Moreover, building commands are defined in the `scripts` section.
| npm command               | details  |
|---------------------------|----------|
| `npm install`             | Install dependencies  |
| `npm start`               | Start a development web server  |
| `npm test`                |  Perform the init testing with karma and mocha|
| `npm run test-watch`      | Run unit test, executing the tests whenever files changes |
| `npm run build`           | Build the project (production build) |
| `npm publish`             | Publish build to npm |

package.json will be used to configure path of cucumber JSON/html report using below command
"json": {
      "enabled": true,
      "output": "cypress/cucumberReports/results.json"
    }

## command.js
Create various custom commands and overwrite
existing commands. 
Example:-
Cypress.Commands.add('clickLink', (label) => {
  cy.get('a').contains(label).click()
})

## Cucumber JSON Formatter
https://github.com/cucumber/json-formatter/releases/tag/v19.0.0
Download cucumber-json-formatter-windows-amd64 and rename it to cucumber-json-formatter.exe

## ESLint

`ESLint` is a so called linter, it serves two purposes:
 * check for common errors
 * enforce coding style

Mistakes can be caught at development time rather than deployment time and thus reduce the cost of such errors.


## Install

Install all dependencies
```
    npm install --force
```

## Run

To run the code :
npx cypress open 
or
    $ "test": "npx cypress run",
    $ "headTest": "npm run test --headed",
    $ "chromeTest": "npm run test --browser chrome",
    $ "recordDashBoardTest": "npm run test --record --key fa423514-5a84-42a7-b6a0-b5e7191bba12 --reporter mochawesome",

# Cypress Cloud
It gives you online access to your recorded test results.
* ProjectId - needs to added in cypress.config.js
* record key - needs to passed while executing the feature file

# Environment Variables
This can be set in cypress.config.js 
Example 
env: {
    url: "https://google.com",
  }
and can be accessible via Cypress.env('url')
env json is not accepting level two json like
env :{
  pom :{
    apiPost : '',
    apiGet : ''
  }
}
if users uses Cypress it will have global access and if user uses cy then it has local access


# Coding standards 

## Project structure

| Path                  | Description
|-----------------------|-----------------------
| /fixtures             | Path to folder containing external pieces of static data          
| /sscreenshots         |  screenshots will be saved    
| /videos               | videos will be saved 
| /downloads            | folder where files downloaded during a test are saved

## File names
All file names and folders should follow the camel case naming convention 

## Function signature
Call back functions should be written like 
function () {}
Avoid using writing ES6 way as mocha doesn't support it, like
() => {}

## Directory
It should be created based on application functionality and would have 
* feature file
* step definition(.js)
* page object locators(.json) 

## Common components
All common re-components functions ( /integration/common/ ) must be presentable in this folder and action on component will be defined in command.js

## application under test
https://github.com/bondar-artem/ngx-cypress-test
https://www.automationteststore.com/

## Tag and push
$ git tag v0.1.0 
$ git push --tags

## Install nodeJS in ubuntu
* sudo apt install nodejs
* node -v

## Install chrome in ubuntu
* sudo apt update
* sudo apt upgrade
* wget --version
* wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
* sudo dpkg -i google-chrome-stable_current_amd64.deb
* sudo chmod +x google-chrome-stable_current_amd64.deb
* sudo dpkg -i google-chrome-stable_current_amd64.deb
* sudo apt install -f
* sudo dpkg -i google-chrome-stable_current_amd64.deb
* google-chrome --version
* google-chrome