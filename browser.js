module.exports = compose

function compose (countries) {
  if (typeof countries !== 'object') {
    throw new Error(
      'You have to pass a countries object. You can require it like:\n' +
      '`countries = require("localized-countries")(require("localized-countries/data/en"))`'
    )
  }

  const list = Object.keys(countries).map(function (code) {
    return {code: code, label: countries[code]}
  })

  return {
    object: function getAllCountries () { return countries },
    array: function getAllCountries () { return list },
    get: function getCountryByCode (code) { return countries[code] }
  }
}
