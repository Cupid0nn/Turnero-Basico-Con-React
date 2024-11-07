import "reflect-metadata"
import { DataSource } from "typeorm";
import dotenv from "dotenv";
import { UserEntity } from "../ENTITIES/UserEntity";
import { AppointmentsEntity } from "../ENTITIES/appointmentsEntity";
import { CredentialEntity } from "../ENTITIES/CredentialEntity";
dotenv.config();

export const AppDataSource = new DataSource({
    //+ CREDENCIALES    
    type: "postgres",
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT) || 3002,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    //* CONFG EXTRAS
    synchronize: true, // PASAR A FALSE EN PRODUCCION
    dropSchema: true, // PASAR A FALSE EN PRODUCCION
    logging: true,  // PASAR A FALSE EN PRODUCCION
    entities: [UserEntity, AppointmentsEntity, CredentialEntity],
    subscribers: [],
    migrations: [],
})
