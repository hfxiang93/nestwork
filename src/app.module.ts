/*
 * @Descripttion:
 * @Author: xianghaifeng
 * @Date: 2021-11-16 11:13:56
 * @LastEditors: xianghaifeng
 * @LastEditTime: 2021-11-16 15:52:47
 */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({ autoLoadEntities: true }),
    PostsModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
