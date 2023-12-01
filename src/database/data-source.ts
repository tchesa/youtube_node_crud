import "reflect-metadata";
import { DataSource } from "typeorm";
import { CreateCategories1701388927178 } from "./migration/1701388927178-CreateCategories";
import { CreateVideos1701389287927 } from "./migration/1701389287927-CreateVideos";
import Category from "../entities/Category";
import Video from "../entities/Video";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  synchronize: true,
  logging: false,
  entities: [Category, Video],
  migrations: [CreateCategories1701388927178, CreateVideos1701389287927],
  subscribers: [],
});
