import { FastifyInstance } from "fastify";
import calculatorTools from '../tools/calculator.tools.json';

interface CalculatorRequest {
    operation: 'add' | 'subtract' | 'multiply' | 'divide';
    a : number;
    b : number;
}

export const calculatorRoutes = (fastify: FastifyInstance) =>{
    fastify.post<{Body: CalculatorRequest}>(
        '/v1/tools/calculator', //especificar ruta

        {
            schema: {
                description: "Ejecutar operaciones aritméticas básicas",
                tags: ['calculator'],
                security: [{ ApiKeyAuth: [] }], // Documentamos que requiere seguridad
                body: {
                    ...calculatorTools.inputSchema,
                    // Ejemplo para el Request
                    example: { operation: "divide", a: 10, b: 2 }
                },
                response: {
                    200: {
                        description: 'Resultado exitoso de la operación',
                        type: 'object',
                        properties: {
                            result: { type: 'number' },
                            operation: { type: 'string' }
                        },
                        example: { result: 5, operation: "divide" }
                    },
                    400: {
                        description: 'Error de validación o división por cero',
                        type: 'object',
                        properties: {
                            error: { type: 'string' },
                            message: { type: 'string' }
                        },
                        // Caso especial solicitado: división por cero
                        example: { error: "Invalid operation", message: "Cannot divide by zero" }
                    }
                }
            }
        },

        (request, reply)=>{
            const {operation, a, b} = request.body;
            let result:number = 0;
            switch(operation){
                case 'add':
                    result = a + b
                    break;
                case 'subtract':
                    result = a - b
                    break;
                case 'multiply':
                    result = a * b
                    break;
                case 'divide':
                    if(b == 0)
                        return reply.status(400).send({error: 'Invalid operation'})
                    result = a / b
                    break;
                default:
                    return reply.status(400).send({error: 'Invalid operation'})      
            }

            return reply.status(200).send({result, operation});

        }
    )
}