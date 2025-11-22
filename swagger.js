const swaggerJSdoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')
const path = require('path')

const options = {
    definition: {
        openapi:"3.0.0",
        info: {
            title: "Library API",
            version:"1.0.0",
            description:"API for managing a personal library", 
        },
        components: {
            securitySchemes: {
                bearerAuth:{
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT"
                }
            }
        },
        security: [
            {
                bearerAuth: []
            }
        ],
        servers: [
            {
                url: "http://localhost:3000",
                description: "The local base url"
            }
        ],
    },
    apis: [path.join(__dirname, "./routes/*.js")]
}

const swaggerSpec = swaggerJSdoc(options) 

const setUpSwagger = (app) => {
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec))

}

module.exports = setUpSwagger