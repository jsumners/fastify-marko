'use strict'

const fastify = require('fastify')()
const marko = require('marko')
const tmpl = marko.load('./templates/index.marko')

fastify.get('/streaming', (req, reply) => {
  reply
    .header('content-type', 'text/html')
    .send(tmpl.stream({text: 'hello world'}))
})

fastify.get('/blocking', (req, reply) => {
  reply
    .header('content-type', 'text/html')
    .send(tmpl.renderToString({text: 'hello world'}))
})

fastify.listen(3000, err => {
  if (err) throw err
  console.log(`server listening on ${fastify.server.address().port}`)
})
