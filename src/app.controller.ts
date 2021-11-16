/*
 * @Descripttion:
 * @Author: xianghaifeng
 * @Date: 2021-11-16 11:13:56
 * @LastEditors: xianghaifeng
 * @LastEditTime: 2021-11-16 11:48:18
 */
import { ApiTags } from '@nestjs/swagger';
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
@ApiTags('Common')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
