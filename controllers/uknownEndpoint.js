const postsRouter = require('express').Router()

postsRouter.get('/', (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
})

module.exports = postsRouter