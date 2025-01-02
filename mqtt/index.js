import Aedes from 'aedes'
import { createServer } from 'net'

const port = 1883

const aedes = new Aedes()
const server = createServer(aedes.handle)

server.listen(port, function () {
    console.log('server started and listening on port ', port)
})
