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
      plugin: 'vision'
    },
    {
      plugin: 'inert'
    },
    {
      plugin: {
        register: 'visionary',
        options: {
          engines: {
            pug: require('pug')
          },
          path: Path.join(__dirname, '/templates'),
          compileOptions: {
            pretty: true
          }
        }
      }
    }
  ]
}

module.exports = manifest
