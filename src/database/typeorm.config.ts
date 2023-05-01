import { TypeOrmModuleOptions } from '@nestjs/typeorm'

const isProduction = process.env.NODE_ENV === 'production'

const config: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: parseInt(<string>process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  autoLoadEntities: true,
  synchronize: true,
  logging: false,
  extra: isProduction
    ? {
        ssl: {
          rejectUnauthorized: false,
        },
      }
    : undefined,
}

export default config
