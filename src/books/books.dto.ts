import { PickType } from '@nestjs/mapped-types';

import { Book } from './entities/book.entity';
import { Review } from './entities/review.entity';

export class DeleteBookDto extends PickType(Book, ['id'] as const) {}

export class CreateReviewDto extends PickType(Review, ['userId', 'content', 'rating'] as const) {}
