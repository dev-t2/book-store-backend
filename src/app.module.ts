import { CacheModule, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import redisStore from 'cache-manager-redis-store';

import { PrismaModule } from './prisma/prisma.module';
import { FakersModule } from './fakers/fakers.module';
import { UsersModule } from './users/users.module';
import { BooksModule } from './books/books.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    CacheModule.registerAsync({
      isGlobal: true,
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => {
        return {
          store: redisStore,
          host: configService.get('REDIS_HOST'),
          port: configService.get('REDIS_PORT'),
          auth_pass: configService.get('REDIS_AUTH_PASS'),
        };
      },
      inject: [ConfigService],
    }),
    FakersModule,
    UsersModule,
    BooksModule,
  ],
})
export class AppModule {}
