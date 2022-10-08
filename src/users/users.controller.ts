import {
  Controller,
  DefaultValuePipe,
  Get,
  Post,
  Body,
  ParseIntPipe,
  Query,
  Delete,
} from '@nestjs/common';

import { UsersService } from './users.service';
import {
  CreateCartDto,
  CreateOrderDto,
  CreateUserDto,
  DeleteUserDto,
  FindCartsDto,
  FindOrdersDto,
} from './users.dto';

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

  @Delete()
  async deleteUser(@Body() deleteUserDto: DeleteUserDto) {
    return await this.usersService.deleteUser(deleteUserDto);
  }

  @Post('carts')
  async createCart(@Body() createCartDto: CreateCartDto) {
    return await this.usersService.createCart(createCartDto);
  }

  @Get('carts')
  async findCarts(@Body() findCartsDto: FindCartsDto) {
    return await this.usersService.findCarts(findCartsDto);
  }

  @Post('orders')
  async createOrder(@Body() createOrderDto: CreateOrderDto) {
    return await this.usersService.createOrder(createOrderDto);
  }

  @Get('orders')
  async findOrders(@Body() findOrdersDto: FindOrdersDto) {
    return await this.usersService.findOrders(findOrdersDto);
  }
}
