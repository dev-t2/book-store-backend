import { Book as BookModel } from '@prisma/client';

export class Book implements BookModel {
  id: number;
  title: string;
  author: string;
  price: number;
  createdAt: Date;
  updatedAt: Date;
}
