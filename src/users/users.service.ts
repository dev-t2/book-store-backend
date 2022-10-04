import { Injectable } from '@nestjs/common';

import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './users.dto';
import { User } from './users.entity';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}

  async createUser({ email, password }: CreateUserDto): Promise<User> {
    return await this.prismaService.user.create({ data: { email, password } });
  }

  async findUsers(page: number) {
    const skip = page > 0 ? (page - 1) * 20 : 0;

    const [users, count] = await Promise.all([
      this.prismaService.user.findMany({
        skip,
        take: 20,
        orderBy: { updatedAt: 'desc' },
        select: { id: true, email: true },
      }),
      this.prismaService.user.count(),
    ]);

    const maxPage = Math.ceil(count / 20);

    return { users, maxPage };
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} user`;
  // }

  // update(id: number) {
  //   return `This action updates a #${id} user`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}
