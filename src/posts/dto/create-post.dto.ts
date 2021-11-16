/*
 * @Descripttion:
 * @Author: xianghaifeng
 * @Date: 2021-11-16 13:17:16
 * @LastEditors: xianghaifeng
 * @LastEditTime: 2021-11-16 13:53:05
 */
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
export class CreatePostDto {
  @ApiProperty({ description: '文章标题' })
  @IsString()
  @IsNotEmpty({ message: '文章标题必填' })
  readonly title: string;
  @ApiProperty({ description: '作者' })
  @IsString()
  @IsNotEmpty({ message: '缺少作者信息' })
  readonly author: string;
  @ApiPropertyOptional({ description: '内容' })
  readonly content: string;
  @ApiPropertyOptional({ description: '文章封面' })
  readonly thumb_url: string;
  @IsNumber()
  @ApiProperty({ description: '文章类型' })
  readonly type: number;
}
