const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

cypress.run({
  browser: 'firefox'
})
.then((results) => {
  const args = {
    target: process.env.TARGET_TOKEN_FIREFOX,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
