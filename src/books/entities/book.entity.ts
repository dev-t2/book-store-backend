import { Book as BookModel } from '@prisma/client';

export class Book implements BookModel {
  id: number;
  categoryId: number | null;
  title: string;
  author: string;
  price: number;
  createdAt: Date;
  updatedAt: Date;
}
