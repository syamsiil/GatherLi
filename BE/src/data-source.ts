import "reflect-metadata";
import { DataSource } from "typeorm";
import { Thread } from "./entities/Thread";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "aisyiLL21",
  database: "gatherli",
  synchronize: false,
  logging: false,
  entities: ["src/entities/*.ts"],
  migrations: ["src/migrations/*.ts"],
  subscribers: [],
});

// export const AppDataSource = new DataSource({
//   type: "postgres",
//   host: "containers-us-west-50.railway.app",
//   port: 5490,
//   username: "postgres",
//   password: "hoq7fQY6GG8ccWsBNsI1",
//   database: "railway",
//   synchronize: true,
//   logging: false,
//   entities: ["src/entities/*.ts"],
//   migrations: ["src/migrations/*.ts"],
//   subscribers: [],
// });
