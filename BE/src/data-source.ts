import "reflect-metadata";
import { DataSource } from "typeorm";
import { Thread } from "./entities/Thread";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "syahran15",
  database: "db_GatherLi",
  synchronize: true,
  logging: false,
  entities: ["src/entities/*.ts"],
  migrations: ["src/migrations/*.ts"],
  subscribers: [],
});
