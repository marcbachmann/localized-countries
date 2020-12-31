const assert = require('assert')

// Node api
const localizedCountries = require('./')

// .languages()
assert.strictEqual(Array.isArray(localizedCountries.languages()), true, 'Returns an array')
localizedCountries.languages().forEach(function (lang) {
  assert.ok(typeof lang === 'string', '.languages() returns an array of strings')
})

// .get
const german = localizedCountries('de')
assert.strictEqual(german.get('CH'), 'Schweiz')

const english = localizedCountries('en')
assert.strictEqual(english.get('CH'), 'Switzerland')

const japanese = localizedCountries('ja')
assert.strictEqual(japanese.get('CH'), 'スイス')

assert.throws(function () {
  localizedCountries('foo')
}, /Language "foo" not found/)

// .object
const enCountries = localizedCountries('en')
assert.strictEqual(typeof enCountries.object(), 'object', '.object() returns an object')
assert.strictEqual(
  enCountries.object()['CH'],
  'Switzerland', '.object() returns a code to label mapping.'
)

// .array
assert.ok(Array.isArray(enCountries.array()), '.array() an array')
enCountries.array().forEach(function (country) {
  assert.strictEqual(typeof country, 'object')
  assert.strictEqual(typeof country.code, 'string')
  assert.strictEqual(typeof country.label, 'string')
  assert.strictEqual(enCountries.get(country.code), country.label)
})

// Browser api
const browserApi = require('./browser')
assert.throws(function () {
  browserApi()
}, /You have to pass a countries object/)

const browserGerman = browserApi(require('./data/de'))
assert.strictEqual(browserGerman.get('CH'), 'Schweiz')

const browserEnglish = browserApi(require('./data/en'))
assert.strictEqual(browserEnglish.get('CH'), 'Switzerland')

const browserJapanese = browserApi(require('./data/ja'))
assert.strictEqual(browserJapanese.get('CH'), 'スイス')
