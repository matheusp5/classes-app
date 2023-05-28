import "reflect-metadata"
import { DataSource } from "typeorm";
import { Week } from "./entities/Week";

export default new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "root",
  database: "classes",
  synchronize: true,
  logging: false,
  entities: [Week]
})

