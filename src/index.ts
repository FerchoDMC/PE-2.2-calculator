// Import the framework and instantiate it
import Fastify from 'fastify'
import { calculatorRoutes } from './routes/calculator.routes'
import fastifySwagger from '@fastify/swagger'
import fastifySwaggerUi from '@fastify/swagger-ui'

//Inicializar 
const fastify = Fastify({
  logger: true
})




fastify.register(fastifySwagger,{
  openapi: {
    info:{
      title: "Servidor MCP para calcular operaciones basicas",
      description: "Api para realizar operaciones aritmeticas basicas usando MCP",
      version:"1.0.0",
    },
    servers:[
      {
        url: "http://localhost:3000",
        description: "Servidor de desarrollo"
      }
    ],
    tags:[{name: 'calculator', description: 'calculadora de operaciones'}]
  }
})

fastify.register(fastifySwaggerUi, {
  routePrefix: '/docs',
  uiConfig:{
    docExpansion: 'list',
    deepLinking: true
  }
})

// Declare a route
fastify.get('/', async (request, reply) => {
  return { message: 'MCP Server on running' }
})


fastify.register(calculatorRoutes)

const start = async () => {
    // Run the server!
    try {
        await fastify.listen({ port: 3000 })
        console.log('Sesion running on http://localhost:3000')
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}

start()