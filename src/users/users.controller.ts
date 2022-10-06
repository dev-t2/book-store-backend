import {
  Controller,
  DefaultValuePipe,
  Get,
  Param,
  Post,
  Body,
  ParseIntPipe,
  Query,
  Delete,
} from '@nestjs/common';

import { UsersService } from './users.service';
import { CreateCartDto, CreateUserDto, FindCartsDto } from './users.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    return await this.usersService.createUser(createUserDto);
  }

  @Get()
  async findUsers(@Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number) {
    return await this.usersService.findUsers(page);
  }

  @Delete(':id')
  async deleteUser(@Param('id', ParseIntPipe) id: number) {
    return await this.usersService.deleteUser(id);
  }

  @Post('carts')
  async createCart(@Body() createCartDto: CreateCartDto) {
    return await this.usersService.createCart(createCartDto);
  }

  @Get('carts')
  async findCarts(@Body() findCartsDto: FindCartsDto) {
    return await this.usersService.findCarts(findCartsDto);
  }
}
