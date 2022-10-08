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
    CacheModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => {
        return {
          isGlobal: true,
          store: redisStore,
          host: configService.get('REDIS_URL'),
          auth_pass: configService.get('REDIS_PASSWORD'),
          ttl: 10,
        };
      },
      inject: [ConfigService],
    }),
    PrismaModule,
    FakersModule,
    UsersModule,
    BooksModule,
  ],
})
export class AppModule {}
