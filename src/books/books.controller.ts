import {
  Body,
  Controller,
  DefaultValuePipe,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';

import { BooksService } from './books.service';
import { CreateReviewDto } from './dto/reviews.dto';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  async findBooks(@Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number) {
    return await this.booksService.findBooks(page);
  }

  @Delete(':id')
  async deleteBook(@Param('id', ParseIntPipe) id: number) {
    return await this.booksService.deleteBook(id);
  }

  @Post(':bookId/reviews')
  async createReview(
    @Param('bookId', ParseIntPipe) bookId: number,
    @Body() createReviewDto: CreateReviewDto,
  ) {
    return await this.booksService.createReview(bookId, createReviewDto);
  }

  @Get(':bookId/reviews')
  async findReviews(@Param('bookId', ParseIntPipe) bookId: number) {
    return await this.booksService.findReviews(bookId);
  }
}
