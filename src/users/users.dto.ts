import { PickType } from '@nestjs/mapped-types';

import { User } from './entities/user.entity';
import { Cart } from './entities/cart.entity';

export class CreateUserDto extends PickType(User, ['email', 'password'] as const) {}

export class CreateCartDto extends PickType(Cart, ['bookId'] as const) {}
