import { SnakeNamingStrategy } from 'typeorm-naming-strategies'

module.exports = {
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: +process.env.DATABASE_PORT,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PWD,
  database: process.env.DATABASE_NAME,
  synchronize: false,
  logging: true,
  maxQueryExecutionTime: 100,
  migrationsRun: true,
  namingStrategy: new SnakeNamingStrategy(),
  migrationsTableName: 'migration_history',
  entities: ['src/domain/entities/**/*{.ts,.js}'],
  migrations: ['src/infra/migrations/**/*{.ts,.js}'],
  subscribers: ['src/infra/subscribers/**/*{.ts,.js}'],
  cli: {
    entitiesDir: 'src/domain/entities',
    migrationsDir: 'src/infra/migrations',
    subscribersDir: 'src/infra/subscribers',
  },
};
