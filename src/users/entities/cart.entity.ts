import { Cart as CartModel } from '@prisma/client';

export class Cart implements CartModel {
  userId: number;
  bookId: number | null;
  amount: number;
}
