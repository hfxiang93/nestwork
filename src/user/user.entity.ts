/*
 * @Descripttion:
 * @Author: xianghaifeng
 * @Date: 2021-11-16 11:19:19
 * @LastEditors: xianghaifeng
 * @LastEditTime: 2021-11-16 16:01:48
 */
//    posts/posts.entity.ts
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number; // 标记为主列，值自动生成

  @Column({ length: 50 })
  username: string;

  @Column({ length: 20 })
  password: string;

  @Column('text')
  sign: string;

  @Column({ default: '' })
  head_pic_url: string;

  @Column('tinyint')
  gender: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  create_time: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  update_time: Date;
}
