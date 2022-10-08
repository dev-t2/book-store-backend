import { Injectable } from '@nestjs/common';
import { faker } from '@faker-js/faker';

import { PrismaService } from 'src/prisma/prisma.service';
import {
  CreateCartDto,
  CreateOrderDto,
  CreateUserDto,
  DeleteUserDto,
  FindCartsDto,
  FindOrdersDto,
} from './users.dto';

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

  async deleteUser({ id }: DeleteUserDto) {
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

  async createOrder({ userId, bookId }: CreateOrderDto) {
    const paymentId = faker.datatype.uuid();

    return await this.prismaService.order.create({ data: { userId, bookId, paymentId } });
  }

  async findOrders({ userId }: FindOrdersDto) {
    return await this.prismaService.order.findMany({ where: { userId } });
  }
}
