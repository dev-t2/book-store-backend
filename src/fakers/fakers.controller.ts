import { Controller, Post } from '@nestjs/common';

import { FakersService } from './fakers.service';

@Controller('fakers')
export class FakersController {
  constructor(private readonly fakersService: FakersService) {}

  @Post('users')
  async createUsers() {
    return await this.fakersService.createUsers();
  }
}
