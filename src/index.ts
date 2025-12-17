// Import the framework and instantiate it
import Fastify from 'fastify'
import { calculatorRoutes } from './routes/calculator.routes'
import fastifySwagger from '@fastify/swagger'
import fastifySwaggerUi from '@fastify/swagger-ui'

//Inicializar 
const fastify = Fastify({
  logger: true,
  ajv: {
    customOptions: {
      keywords: ['example'], 
      strict: false, 
    }
  }
});




fastify.register(fastifySwagger, {
  openapi: {
    info: {
      title: "MCP Calculator Server",
      description: "Servidor MCP especializado en proporcionar capacidades de cálculo aritmético con validación estricta. Diseñado para ser consumido por modelos de lenguaje (LLMs).",
      version: "1.0.0", // SemVer
      termsOfService: "http://localhost:3000/terms",
      contact: {
        name: "Desarrollador - FerchoDMC",
        url: "https://github.com/FerchoDMC/PE-2.2-calculator.git",
        email: "fercho@hotmail.com"
      },
      license: {
        name: "MIT",
        url: "https://opensource.org/licenses/MIT"
      }
    },
    servers: [
      { url: "http://localhost:3000", description: "Servidor de Desarrollo" }
    ],
    components: {
      securitySchemes: {
        ApiKeyAuth: {
          type: 'apiKey',
          in: 'header',
          name: 'X-API-KEY',
          description: 'Mitigación de Tool Poisoning: Asegura que solo el cliente MCP autorizado invoque las herramientas.'
        },
        BearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
          description: 'Autenticación estándar basada en tokens para servicios externos.'
        }
      }
    }
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