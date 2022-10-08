import { PickType } from '@nestjs/mapped-types';

import { Book } from './entities/book.entity';
import { Category } from './entities/category.entity';
import { Review } from './entities/review.entity';

export class CreateBookDto extends PickType(Book, ['title', 'author', 'price'] as const) {}

export class DeleteBookDto extends PickType(Book, ['id'] as const) {}

export class CreateCategoryDto extends PickType(Category, ['name'] as const) {}

export class CreateReviewDto extends PickType(Review, ['userId', 'content', 'rating'] as const) {}
