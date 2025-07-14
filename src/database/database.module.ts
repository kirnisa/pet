/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"
import * as dotenv from 'dotenv'

dotenv.config()

function validateEnvVariable(name: string): string {
  const value = process.env[name];
  if (value === undefined) {
    throw new Error(`Необходимо указать ${name} в .env файле`);
  }
  return value;
}

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: process.env.POSTGRES_HOST,
      port: +validateEnvVariable('POSTGRES_PORT'),
      username: process.env.POSTGRES_NAME,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      synchronize: false,
      autoLoadEntities: true
    }),
  ],
})
export class DatabaseModule {}
