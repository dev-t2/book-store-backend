import { Review as ReviewModel } from '@prisma/client';

export class Review implements ReviewModel {
  id: number;
  bookId: number;
  userId: number | null;
  content: string;
  rating: number;
  createdAt: Date;
  updatedAt: Date;
}
