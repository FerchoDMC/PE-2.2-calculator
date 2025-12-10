# 🧮 Tool "Calculator" – Proyecto Fastify + TypeScript

Este proyecto implementa un **tool de cálculo** expuesto vía API sobre Fastify, con validación estricta mediante JSON Schema y documentación OpenAPI generada automáticamente. El objetivo es entregar un endpoint robusto, escalable y alineado a buenas prácticas de desarrollo backend.

## 🚀 1. Configuración del Proyecto

### Requerimientos previos
- Node.js 
- npm 
- Thunder Client 

### Inicializacion del proyecto
- npm init -y

### Dependencias
- npm install fastify
- npm install @fastify/swagger
- npm install @fastify/swagger-ui

### Dependencias de desarrollo
- npm install -D @types/node nodemon ts-node typescript

## 📁 2. Estructura del Proyecto
![Estructura](./capturas/estructura.png)

## ⚠️ 3. Manejo Centralizado de Errores
![Codigos](./capturas/codigo.png)

## 🧐 4.Ejemplos de validacion en Thunder

## Validacion de SUMA
### JSON content
{
  "operation": "add", 
  "a": 10, 
  "b": 5
}
### Response
{
  "result": 15,
  "operation": "add"
}
### Captura de Pantalla
![Ejemplo de suma](./capturas/suma.png)


## Validacion de resta
### JSON content
{
  "operation": "subtract", 
  "a": 10, 
  "b": 5
}
### Response
{
  "result": 5,
  "operation": "subtract"
}
### Captura de Pantalla
![Ejemplo de resta](./capturas/resta.png)


## Validacion de multiplicacion
### JSON content
{
  "operation": "multiply", 
  "a": 10, 
  "b": 5
}
### Response
{
  "result": 50,
  "operation": "multiply"
}
### Captura de Pantalla
![Ejemplo de multiplicacion](./capturas/multiply.png)


## Validacion de division
### JSON content
{
  "operation": "divide", 
  "a": 10, 
  "b": 5
}
### Response
{
  "result": 2,
  "operation": "divide"
}
### Captura de Pantalla
![Ejemplo de multiplicacion](./capturas/divide.png)


## Validacion de division por 0
### JSON content
{
  "operation": "divide", 
  "a": 10, 
  "b": 0
}
### Response
{
  "error": "Invalid operation"
}
### Captura de Pantalla
![Ejemplo de multiplicacion](./capturas/divide0.png)


## Validacion del servidor corriendo
![Servidor corriendo](./capturas/cap-server.png)


