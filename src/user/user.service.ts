import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/user/create-user.dto';
import { UpdateUserDto } from '../dto/user/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/User.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(dto: CreateUserDto) {
    let user = new User();
    console.log(dto);

    const { pwd, ...newData } = dto;
    const hashed = bcrypt.hashSync(pwd, 10);

    user = this.userRepository.create({
      pwd: hashed,
      ...newData,
    });
    return await this.userRepository.save(user);
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.findOne({ where: { id } });
    // check that record exist

    if (user) {
      const { pwd, ...newData } = updateUserDto;
      const hashed = bcrypt.hashSync(pwd, 10);

      await this.userRepository
        .createQueryBuilder()
        .update(User)
        .set({
          name: newData.name,
          username: newData.username,
          pwd: hashed,
          email: newData.email,
          created_at: newData.created_at,
          active: newData.active,
        })
        .where('id = :id', { id: id })
        .execute();
    }
  }

  async findByUsername(username: string): Promise<User | undefined> {
    const user = await this.userRepository.findOne({ where: { username } });

    console.log(user);

    return user;
  }

  /*async delete(id: number) {
    const user = await this.userRepository.findOne({ where: { id } });
    // check that record exist

    return await this.userRepository.remove(user);
  }*/

  findOne(username: string) {
    const user = this.userRepository.findOne({
      where: { username: username },
    });

    return user;
  }
  findAll() {
    return this.userRepository.find();
  }
  findById(id: number) {
    // Alterado o método de find para findOne, para retornar apenas o usuário pesquisado
    const user = this.userRepository.findOne({
      where: { id: id },
    });

    return user;
  }
}
