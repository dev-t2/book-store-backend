import { Injectable } from '@nestjs/common';

import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BooksService {
  constructor(private readonly prismaService: PrismaService) {}

  async findBooks(page: number) {
    const skip = page > 0 ? (page - 1) * 20 : 0;

    const [books, count] = await Promise.all([
      this.prismaService.book.findMany({ skip, take: 20, orderBy: { updatedAt: 'desc' } }),
      this.prismaService.book.count(),
    ]);

    const maxPage = Math.ceil(count / 20);

    return { books, maxPage };
  }

  // create(createBookDto: CreateBookDto) {
  //   console.log(createBookDto);
  //   return 'This action adds a new book';
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} book`;
  // }

  // update(id: number) {
  //   return `This action updates a #${id} book`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} book`;
  // }
}
