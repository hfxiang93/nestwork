/*
 * @Descripttion:
 * @Author: xianghaifeng
 * @Date: 2021-11-16 11:13:56
 * @LastEditors: xianghaifeng
 * @LastEditTime: 2021-11-16 14:12:34
 */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './core/filter/http-exception.filter';
import { TransformInterceptor } from './core/interceptor/transform.interceptor';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from './pipe/validation.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 设置全局路由前缀
  app.setGlobalPrefix('/v1/api');
  // 注册全局过滤器
  app.useGlobalFilters(new HttpExceptionFilter());
  // 注册全局响应拦截器
  app.useGlobalInterceptors(new TransformInterceptor());
  // 注册全局校验管道
  app.useGlobalPipes(new ValidationPipe());
  // 设置swagger文档
  const config = new DocumentBuilder()
    .setTitle('管理后台')
    .setDescription('管理后台接口文档')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);
  await app.listen(3000);
}
bootstrap();
