# localized-countries


#### Get a language by code

```js
var german = require('localized-countries')('de')
german.get('CH') // returns 'Schweiz'

var english = require('localized-countries')('en')
english.get('CH') // returns 'Switzerland'

var japanese = require('localized-countries')('jp')
japanese.get('CH') // returns '\u30b9\u30a4\u30b9'
```

#### Get a countries array

```js
var english = require('localized-countries')('en')
english.array()
// returns all countries as array [{code: "US", label: "United States"}, ....]
```


#### Get a countries map

```js
var english = require('localized-countries')('en')
english.object()
// returns all countries as object {"US": "United States", "CH": "Switzerland"}
```


#### In the browser

You probably don't want to load all languages. So I suggest you to load specific files.

```
var englishCountries = require('localized-countries')(require('localized-countries/data/en'))
englishCountries.get('US') // returns 'United States'
```
