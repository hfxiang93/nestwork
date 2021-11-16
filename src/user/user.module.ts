/*
 * @Descripttion:
 * @Author: xianghaifeng
 * @Date: 2021-11-16 15:52:24
 * @LastEditors: xianghaifeng
 * @LastEditTime: 2021-11-16 16:09:42
 */
import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserEntity } from './user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
