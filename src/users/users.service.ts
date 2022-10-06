import { Injectable } from '@nestjs/common';

import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCartDto, CreateUserDto, FindCartsDto } from './users.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}

  async createUser({ email, password }: CreateUserDto) {
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

  async createCart({ userId, bookId }: CreateCartDto) {
    const carts = await this.prismaService.cart.create({
      data: { userId, bookId },
    });

    return { carts };
  }

  async findCarts({ userId }: FindCartsDto) {
    const carts = await this.prismaService.cart.findMany({
      where: { userId },
      select: { book: true, amount: true },
    });

    return { carts };
  }
}
