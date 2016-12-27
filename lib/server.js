'use strict'

// Libraries
const Glue = require('glue')

// Helpers
const queryRepositories = require('./queryRepositories')

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
        reply.view('index', {title: 'AwesomeHyper'})
      }
    })

    server.route({
      method: 'GET',
      path: '/plugins',
      handler: (request, reply) => {
        const plugins = require('./data/plugins')
        queryRepositories(plugins).then((repositories) => {
          reply.view('list', {title: 'Plugins', repositories})
        })
      }
    })

    server.route({
      method: 'GET',
      path: '/themes',
      handler: (request, reply) => {
        const themes = require('./data/themes')
        queryRepositories(themes).then((repositories) => {
          reply.view('list', {title: 'Themes', repositories})
        })
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
