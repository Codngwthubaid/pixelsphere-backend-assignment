import swaggerJsdoc from "swagger-jsdoc";

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Pixisphere Backend API",
            version: "1.0.0",
            description:
                "Backend APIs for Pixisphere"
        },
        servers: [
            {
                url: "http://localhost:5000",
                description: "Local Server"
            }
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
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
        ]
    },
    apis: ["./routes/*.js"]
};

export const swaggerSpec = swaggerJsdoc(options);
