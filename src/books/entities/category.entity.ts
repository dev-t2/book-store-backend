import { Category as CategoryModel } from '@prisma/client';

export class Category implements CategoryModel {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}
