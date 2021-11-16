/*
 * @Descripttion:
 * @Author: xianghaifeng
 * @Date: 2021-11-16 11:15:42
 * @LastEditors: xianghaifeng
 * @LastEditTime: 2021-11-16 11:22:58
 */
import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsEntity } from './posts.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PostsEntity])],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}
