import { Injectable } from '@nestjs/common';
import { faker } from '@faker-js/faker';

import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FakersService {
  constructor(private readonly prismaService: PrismaService) {}

  async createUsers() {
    const data = new Array(10000).fill(null).map(() => ({
      email: faker.internet.email(),
      password: faker.internet.password(),
    }));

    return await this.prismaService.user.createMany({ data });
  }

  async createBooks() {
    const data = new Array(1000000).fill(null).map(() => ({
      title: faker.lorem.sentence(),
      author: faker.internet.userName(),
      price: Math.round(Math.random() * 5) * 5000 + 10000,
    }));

    return await this.prismaService.book.createMany({ data });
  }
}
