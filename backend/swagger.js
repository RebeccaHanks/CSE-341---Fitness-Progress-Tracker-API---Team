const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Fitness Progress Tracker API',
        description: 'API documentation for Fitness Progress',
    },
    host: 'localhost:3000',
    schemes: ['https'],
};

const outputFile = './swagger.json';
const routes = ['./routes/index.js'];

swaggerAutogen(outputFile, routes, doc);