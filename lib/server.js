'use strict'

// Libraries
const Glue = require('glue')

exports.init = (manifest, options, next) => {
  Glue.compose(manifest, options, (err, server) => {
    if (err) {
      throw err
    }

    // Routes
    server.route({
      method: 'GET',
      path: '/',
      handler: (request, reply) => {
        reply('Hello')
      }
    })

    server.route({
      method: 'GET',
      path: '/{param*}',
      handler: {
        directory: {
          path: '.',
          redirectToSlash: true,
          index: true
        }
      }
    })

    server.start((err) => {
      return next(err, server)
    })
  })
}
