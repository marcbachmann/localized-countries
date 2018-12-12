# localized-countries
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fmarcbachmann%2Flocalized-countries.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fmarcbachmann%2Flocalized-countries?ref=badge_shield)



#### Get a language by code

```js
var german = require('localized-countries')('de')
german.get('CH') // returns 'Schweiz'

var english = require('localized-countries')('en')
english.get('CH') // returns 'Switzerland'

var japanese = require('localized-countries')('ja')
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

```js
var englishCountries = require('localized-countries')(require('localized-countries/data/en'))
englishCountries.get('US') // returns 'United States'
```


## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fmarcbachmann%2Flocalized-countries.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fmarcbachmann%2Flocalized-countries?ref=badge_large)