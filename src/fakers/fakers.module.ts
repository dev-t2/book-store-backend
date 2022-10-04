import { Module } from '@nestjs/common';

import { PrismaModule } from 'src/prisma/prisma.module';
import { FakersController } from './fakers.controller';
import { FakersService } from './fakers.service';

@Module({
  imports: [PrismaModule],
  controllers: [FakersController],
  providers: [FakersService],
})
export class FakersModule {}
