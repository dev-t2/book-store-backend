import { PartialType } from '@nestjs/mapped-types';

export class CreateBookDto {}

export class UpdateBookDto extends PartialType(CreateBookDto) {}
