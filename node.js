module.exports = compose

const api = require('./browser')

function compose (lang) {
  try {
    const countries = require(`./data/${lang}`)
    return api(countries)
  } catch (err) {
    throw new Error(`Language "${lang}" not found`)
  }
}

compose.languages = function () {
  return require('./languages')
}
