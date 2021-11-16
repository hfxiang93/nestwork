/*
 * @Descripttion:
 * @Author: xianghaifeng
 * @Date: 2021-11-16 16:04:54
 * @LastEditors: xianghaifeng
 * @LastEditTime: 2021-11-16 16:06:51
 */
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
export class CreateUserDto {
  @ApiProperty({ description: '用户名' })
  @IsString()
  @IsNotEmpty({ message: '用户名必填' })
  readonly username: string;
  @ApiProperty({ description: '密码' })
  @IsString()
  @IsNotEmpty({ message: '缺少密码' })
  readonly password: string;
  @ApiPropertyOptional({ description: '个人签名' })
  readonly sign: string;
  @ApiPropertyOptional({ description: '头像url' })
  readonly head_pic_url: string;
  @IsNumber()
  @ApiProperty({ description: '性别' })
  readonly gender: number;
}
