'use strict'

// Load modules

const Hoek = require('hoek')
const Server = require('./server')

const manifest = require('./manifest')

Server.init(manifest, {}, (err, server) => {
  Hoek.assert(!err, err)

  console.log(`Server running at: ${server.info.uri}`)
})
