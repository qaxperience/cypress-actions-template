const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjdmZDZiZmUwLWRmYjgtNGZlMS05MjIwLThhMzI0ZjFjMjRjMC0xNzE0MTAyODUyNTQ4IiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiOTZiMTE4ZjMtM2FiMi00YjIzLWI0OWUtM2ZmZWY3NjQxYjcwIiwidHlwZSI6InQifQ.rCJUb2uWurEBK-GWQIohgQzDmpcEwoZFK_ZclQGv3HU'
  
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
