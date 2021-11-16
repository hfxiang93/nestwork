/*
 * @Descripttion:
 * @Author: xianghaifeng
 * @Date: 2021-11-16 11:13:56
 * @LastEditors: xianghaifeng
 * @LastEditTime: 2021-11-16 13:28:18
 */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot({ autoLoadEntities: true }), PostsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
