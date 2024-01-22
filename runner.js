const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImRkOWM4OTE1LTRlMmUtNGY4NS04YWFhLTI0MGExMGI5MDg4OC0xNzA1MDI4MDczMzkyIiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiYjM0MmI2YTItNDg2ZS00MmFhLWIyZTktZmVkOGMwNzE1OGQwIiwidHlwZSI6InQifQ.e1bs4UVA5zq497nDE_yZp5FzYRvQ71ehAqrhcQE4_58'

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
