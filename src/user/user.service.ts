/*
 * @Descripttion:
 * @Author: xianghaifeng
 * @Date: 2021-11-16 15:52:42
 * @LastEditors: xianghaifeng
 * @LastEditTime: 2021-11-16 16:25:39
 */
import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getRepository, Repository } from 'typeorm';
import { UserEntity } from './user.entity';
export interface UserRo {
  list: UserEntity[];
  count: number;
}
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}
  // 创建user
  async create(user: Partial<UserEntity>): Promise<UserEntity> {
    const { username } = user;
    // if (!title) {
    //   throw new HttpException('缺少用户名', 401);
    // }
    const doc = await this.userRepository.findOne({ where: { username } });
    if (doc) {
      throw new HttpException('用户名已存在', 401);
    }
    return await this.userRepository.save(user);
  }
  // 获取用户列表
  async findAll(query): Promise<UserRo> {
    const qb = await getRepository(UserEntity).createQueryBuilder('user');
    qb.where('1 = 1');
    qb.orderBy('user.create_time', 'DESC');

    const count = await qb.getCount();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { pageNum = 1, pageSize = 10, ...params } = query;
    qb.limit(pageSize);
    qb.offset(pageSize * (pageNum - 1));

    const users = await qb.getMany();
    return { list: users, count: count };
  }

  // 获取指定用户
  async findById(id): Promise<UserEntity> {
    return await this.userRepository.findOne(id);
  }

  // 更新用户
  async updateById(id, user): Promise<UserEntity> {
    const existUser = await this.userRepository.findOne(id);
    if (!existUser) {
      throw new HttpException(`id为${id}的用户不存在`, 401);
    }
    const updateUser = this.userRepository.merge(existUser, user);
    return this.userRepository.save(updateUser);
  }

  // 刪除用户
  async remove(id) {
    const existUser = await this.userRepository.findOne(id);
    if (!existUser) {
      throw new HttpException(`id为${id}的用户不存在`, 401);
    }
    return await this.userRepository.remove(existUser);
  }
}
