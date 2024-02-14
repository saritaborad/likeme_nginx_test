const swaggerAutogen = require("swagger-autogen")();

const outputFile = "./swagger-output.json"; // Output location for the generated Swagger documentation
const endpointsFiles = ["./routes/*.js"]; // Specify the locations of your route files

const config = {
 host: "likeme.live/likeme",
 basePath: "/api",
 schemes: ["https"],
};

swaggerAutogen(outputFile, endpointsFiles, config);
