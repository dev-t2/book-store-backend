import { Injectable } from '@nestjs/common';

import { PrismaService } from 'src/prisma/prisma.service';
import { CreateBookDto, CreateCategoryDto, CreateReviewDto, DeleteBookDto } from './books.dto';

@Injectable()
export class BooksService {
  constructor(private readonly prismaService: PrismaService) {}

  async createBook({ title, author, price }: CreateBookDto) {
    return await this.prismaService.book.create({
      data: {
        title,
        author,
        price,
        // category: { connect: { id: 9 } }
      },
      include: { category: true },
    });
  }

  async findBooks(page: number) {
    const skip = page > 0 ? (page - 1) * 20 : 0;

    const [books, count] = await Promise.all([
      this.prismaService.book.findMany({ skip, take: 20, orderBy: { updatedAt: 'desc' } }),
      this.prismaService.book.count(),
    ]);

    const maxPage = Math.ceil(count / 20);

    return { books, maxPage };
  }

  async searchBooks(word: string, page: number) {
    const search = `${word}`;

    const skip = page > 0 ? (page - 1) * 20 : 0;

    const [books, count] = await Promise.all([
      this.prismaService.book.findMany({
        where: { title: { search } },
        skip,
        take: 20,
        orderBy: { updatedAt: 'desc' },
      }),
      this.prismaService.book.count({ where: { title: { search } } }),
    ]);

    const maxPage = Math.ceil(count / 20);

    return { books, maxPage };
  }

  async deleteBook({ id }: DeleteBookDto) {
    return await this.prismaService.book.delete({ where: { id } });
  }

  async createCategory({ name }: CreateCategoryDto) {
    return await this.prismaService.category.create({
      data: {
        name,
        // books: { connect: [{ id: 1000000 }, { id: 999999 }, { id: 999998 }] }
      },
    });
  }

  async findCategories(page: number) {
    const skip = page > 0 ? (page - 1) * 20 : 0;

    const [categories, count] = await Promise.all([
      this.prismaService.category.findMany({
        skip,
        take: 20,
        orderBy: { updatedAt: 'desc' },
        include: { books: true },
      }),
      this.prismaService.category.count(),
    ]);

    const maxPage = Math.ceil(count / 20);

    return { categories, maxPage };
  }

  async createReview(bookId: number, { userId, content, rating }: CreateReviewDto) {
    return await this.prismaService.review.create({ data: { bookId, userId, content, rating } });
  }

  async findReviews(bookId: number) {
    return await this.prismaService.review.findMany({
      where: { bookId },
      select: {
        id: true,
        book: true,
        user: { select: { id: true, email: true } },
        content: true,
        rating: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }
}
