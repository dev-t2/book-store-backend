import { PickType } from '@nestjs/mapped-types';

import { User } from './entities/user.entity';
import { Cart } from './entities/cart.entity';
import { Order } from './entities/order.entity';

export class CreateUserDto extends PickType(User, ['email', 'password'] as const) {}

export class DeleteUserDto extends PickType(User, ['id'] as const) {}

export class CreateCartDto extends PickType(Cart, ['userId', 'bookId'] as const) {}

export class FindCartsDto extends PickType(Cart, ['userId'] as const) {}

export class CreateOrderDto extends PickType(Order, ['userId', 'bookId'] as const) {}

export class FindOrdersDto extends PickType(Order, ['userId'] as const) {}
