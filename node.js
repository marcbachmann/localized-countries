module.exports = compose

var api = require('./browser')

function compose (lang) {
  try {
    var countries = require('./data/' + lang)
  } catch (err) {
    throw new Error('Language "' + lang + '" not found')
  }

  return api(countries)
}

compose.languages = function () {
  return require('./languages')
}
