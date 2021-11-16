/*
 * @Descripttion:
 * @Author: xianghaifeng
 * @Date: 2021-11-16 11:36:25
 * @LastEditors: xianghaifeng
 * @LastEditTime: 2021-11-16 11:36:42
 */
import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';

@Injectable()
export class TransformInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data) => {
        return {
          data,
          code: 0,
          msg: '请求成功',
        };
      }),
    );
  }
}
