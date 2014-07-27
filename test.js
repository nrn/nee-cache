var test = require('tape')
  , EE = require('events').EventEmitter
  , cache = require('./index')

test('ee', function (t) {
  var ee = new EE()

  cache(ee)

  ee.emit('bar', 'no listener')

  ee.on('bar', function (a) { t.equal(a, 'no listener', 'Replayed!')})

  t.end()
})

