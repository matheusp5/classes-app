import "reflect-metadata"
import { DataSource } from "typeorm";
import { Week } from "./entities/Week";

export default new DataSource({
  type: "sqlite",
  database: "./classess.db",
  synchronize: true,
  logging: true,
  entities: [Week]
})

