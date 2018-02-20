const routes = (server) => {
  server.get('/', (req, res, next) => {
    res.send('Enjoy the teste...')
    next()
  })
}

module.exports = routes
