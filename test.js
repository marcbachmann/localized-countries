var assert = require('assert')

// Node api
var localizedCountries = require('./')

// .languages()
assert.equal(Array.isArray(localizedCountries.languages()), true, 'Returns an array')
localizedCountries.languages().forEach(function (lang) {
  assert.ok(typeof lang === 'string', '.languages() returns an array of strings')
})

// .get
var german = localizedCountries('de')
assert.equal(german.get('CH'), 'Schweiz')

var english = localizedCountries('en')
assert.equal(english.get('CH'), 'Switzerland')

var japanese = localizedCountries('ja')
assert.equal(japanese.get('CH'), 'スイス')

assert.throws(function () {
  localizedCountries('foo')
}, /Language "foo" not found/)

// .object
var enCountries = localizedCountries('en')
assert.equal(typeof enCountries.object(), 'object', '.object() returns an object')
assert.equal(enCountries.object()['CH'], 'Switzerland', '.object() returns a code to label mapping.')

// .array
assert.ok(Array.isArray(enCountries.array()), '.array() an array')
enCountries.array().forEach(function (country) {
  assert.equal(typeof country, 'object')
  assert.equal(typeof country.code, 'string')
  assert.equal(typeof country.label, 'string')
  assert.equal(enCountries.get(country.code), country.label)
})

// Browser api
var browserApi = require('./browser')
assert.throws(function () {
  browserApi()
}, /You have to pass a countries object/)

var browserGerman = browserApi(require('./data/de'))
assert.equal(browserGerman.get('CH'), 'Schweiz')

var browserEnglish = browserApi(require('./data/en'))
assert.equal(browserEnglish.get('CH'), 'Switzerland')

var browserJapanese = browserApi(require('./data/ja'))
assert.equal(browserJapanese.get('CH'), 'スイス')

