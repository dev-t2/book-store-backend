import { Module } from '@nestjs/common';

import { FakersController } from './fakers.controller';
import { FakersService } from './fakers.service';

@Module({
  controllers: [FakersController],
  providers: [FakersService],
})
export class FakersModule {}
