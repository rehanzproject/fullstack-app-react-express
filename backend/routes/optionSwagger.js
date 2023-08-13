export const options = {
    definition: {
      openapi: "3.1.0",
      info: {
        title: "FullStack Express API with Swagger",
        version: "0.1.0",
        description:
          "This is a simple CRUD API application made with Express and documented with Swagger",
        license: {
          name: "MIT",
          url: "https://spdx.org/licenses/MIT.html",
        },
        contact: {
          name: "Rehan Maulana",
          url: "https://github.com/rehanzproject",
          email: "rehanmaul111@gmail.com",
        },
      },
      servers: [
        {
          url: "http://localhost:5000",
        },
      ],
    },
    apis: ["./routes/*.js"],
  };
  