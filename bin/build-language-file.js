const fs = require('fs')
const path = require('path')

const dir = path.resolve('data')
const languages = fs.readdirSync(dir).map(function (p) { return p.split('.')[0] })
console.log(JSON.stringify(languages)) // eslint-disable-line no-console
