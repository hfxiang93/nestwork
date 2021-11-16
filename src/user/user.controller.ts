/*
 * @Descripttion:
 * @Author: xianghaifeng
 * @Date: 2021-11-16 15:52:33
 * @LastEditors: xianghaifeng
 * @LastEditTime: 2021-11-16 16:20:36
 */
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { UserService, UserRo } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';

@ApiTags('用户')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  /**
   * 创建用户
   * @param user
   */
  @ApiOperation({ summary: '创建用户' })
  @Post()
  async create(@Body() user: CreateUserDto) {
    return await this.userService.create(user);
  }
  /**
   * 获取所有用户
   */
  @ApiOperation({ summary: '获取所有用户' })
  @Get()
  async findAll(@Query() query): Promise<UserRo> {
    return await this.userService.findAll(query);
  }

  /**
   * 获取指定用户
   * @param id
   */
  @ApiOperation({ summary: '获取指定用户' })
  @Get(':id')
  async findById(@Param('id') id) {
    return await this.userService.findById(id);
  }

  /**
   * 更新用户
   * @param id
   * @param user
   */
  @ApiOperation({ summary: '更新用户' })
  @Put(':id')
  async update(@Param('id') id, @Body() user) {
    return await this.userService.updateById(id, user);
  }

  /**
   * 删除
   * @param id
   */
  @ApiOperation({ summary: '删除指定用户' })
  @Delete(':id')
  async remove(@Param('id') id) {
    return await this.userService.remove(id);
  }
}
