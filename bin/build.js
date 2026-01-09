const fs = require('fs')
const languages = require('../languages.json')

function getCountriesArray (lang = 'en') {
  const A = 65
  const Z = 90
  const countryName = new Intl.DisplayNames([lang], {type: 'region'})
  const countries = []
  for (let i = A; i <= Z; ++i) {
    for (let j = A; j <= Z; ++j) {
      const code = String.fromCharCode(i) + String.fromCharCode(j)
      const name = countryName.of(code)
      if (code !== name) countries.push(code)
    }
  }
  return countries
}

function getTranslatedCountries (lang) {
  const region = new Intl.DisplayNames([lang.replace(/_/g, '-')], {
    type: 'region'
  })
  const obj = {}
  for (const code of countries) obj[code] = region.of(code)
  return obj
}

const countries = getCountriesArray()

for (const lang of languages) {
  const translatedCountries = getTranslatedCountries(lang)
  fs.writeFileSync(`./data/${lang}.json`, JSON.stringify(translatedCountries))
}
