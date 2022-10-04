import { Controller, DefaultValuePipe, Get, ParseIntPipe, Query } from '@nestjs/common';

import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  findBooks(@Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number) {
    return this.booksService.findBooks(page);
  }

  // @Post()
  // create(@Body() createBookDto: CreateBookDto) {
  //   return this.booksService.create(createBookDto);
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.booksService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
  //   return this.booksService.update(+id, updateBookDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.booksService.remove(+id);
  // }
}
