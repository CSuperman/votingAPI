const serverJSON = require('json-server')
const server = jsonServer.create()
const middleware = jsonServer.defaults()
const router = jsonServer.router('db.json')
const port = process.env.PORT || 9999

server.use(router)
server.use(middleware)
server.use(jsonServer.bodyParser) // for crud operations
server.listen(port, () => console.log('server is ready'))
