import { DataSource } from "typeorm";
import { config } from "dotenv";

config();

export const Database = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,

  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PWD,
  database: process.env.POSTGRES_DB,

  synchronize: false,

  logging: true,

  entities: ["src/entities/*.ts"],

  migrations: ["src/migrations/*.ts"],
});

Database.initialize()
  .then(() => {
    console.log("Data Source initialized");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });

// import { DataSource } from "typeorm";
// import { config } from "dotenv";

// config();

// export const Database = new DataSource({
//   type: "postgres",
//   url: process.env.DATABASE_URL,
//   ssl:
//     process.env.NODE_ENV === "production"
//       ? { rejectUnauthorized: false }
//       : false,
//   synchronize: false,
//   logging: true,
//   entities:
//     process.env.NODE_ENV === "production"
//       ? ["dist/entities/*.js"]
//       : ["src/entities/*.ts"],
//   migrations:
//     process.env.NODE_ENV === "production"
//       ? ["dist/migrations/*.js"]
//       : ["src/migrations/*.ts"],
// });

// Database.initialize()
//   .then(() => {
//     console.log("Data Source initialized");
//   })
//   .catch((err) => {
//     console.error("Error during Data Source initialization", err);
//   });
