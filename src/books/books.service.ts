import { Injectable } from '@nestjs/common';

import { CreateBookDto } from './books.dto';

@Injectable()
export class BooksService {
  create(createBookDto: CreateBookDto) {
    console.log(createBookDto);

    return 'This action adds a new book';
  }

  // findAll() {
  //   return `This action returns all books`;
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
