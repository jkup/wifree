'use strict'

const Path = require('path')

const manifest = {
  server: {},
  connections: [
    {
      port: 3000,
      routes: {
        files: {
          relativeTo: Path.join(__dirname, 'public')
        }
      }
    }
  ],
  registrations: [
    {
      plugin: 'inert'
    }
  ]
}

module.exports = manifest
