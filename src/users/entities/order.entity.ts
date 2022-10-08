import { Order as OrderModel } from '@prisma/client';

export class Order implements OrderModel {
  id: number;
  userId: number;
  bookId: number;
  amount: number;
  paymentId: string;
  createdAt: Date;
  updatedAt: Date;
}
