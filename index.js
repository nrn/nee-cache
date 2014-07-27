var slice = require('lodash._slice')

module.exports = function (ee) {
  var cache = {}
    , emit = ee.emit
    , on = ee.on

  ee.emit = function (type) {
    cache[type] = slice(arguments, 1)
    emit.apply(this, slice(arguments))
    return this
  }

  ee.on = function (type, handler) {
    var last = cache[type]
    if (last) handler.apply(this, last)
    on.apply(this, slice(arguments))
    return this
  }

  return ee
}

