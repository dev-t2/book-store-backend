import { PartialType, PickType } from '@nestjs/mapped-types';

import { User } from './users.entity';

export class CreateUserDto extends PickType(User, ['email', 'password'] as const) {}

export class UpdateUserDto extends PartialType(User) {}