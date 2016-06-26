var fs = require('fs')
var path = require('path')

var dir = path.resolve('data')
var languages = fs.readdirSync(dir).map(function (p) { return p.split('.')[0] })
console.log(JSON.stringify(languages))
