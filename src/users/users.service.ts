import { Injectable } from '@nestjs/common';

import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/users.dto';
import { User } from './entities/user.entity';

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

  async deleteUser(id: number) {
    return await this.prismaService.user.delete({
      where: { id },
      select: { id: true, email: true },
    });
  }
}
