import { PickType } from '@nestjs/mapped-types';

import { Review } from '../entities/review.entity';

export class CreateReviewDto extends PickType(Review, ['userId', 'content', 'rating'] as const) {}
