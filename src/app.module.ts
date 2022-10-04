import { Module } from '@nestjs/common';

import { PrismaModule } from './prisma/prisma.module';
import { FakersModule } from './fakers/fakers.module';
import { UsersModule } from './users/users.module';
import { BooksModule } from './books/books.module';

@Module({
  imports: [PrismaModule, FakersModule, UsersModule, BooksModule],
})
export class AppModule {}
