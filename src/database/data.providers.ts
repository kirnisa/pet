/* eslint-disable prettier/prettier */
import { DataSource } from 'typeorm';
import { get } from 'env-var';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: get('DB_HOST').default('localhost').asString(),
        port: get('DB_PORT').default(3000).asPortNumber(),
        username: get('DB_USERNAME').asString(),
        password: get('DB_PASSWORD').asString(),
        database: get('DB_DATABASE').asString(),
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];
