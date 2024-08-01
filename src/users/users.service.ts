import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    
  ) {}

  async create(createUserDto: CreateUserDto) {
    
    return  null;
  }

  async findAll() {
    return  null;
  }

  async findOne(id: number) {
    return  null;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return  null;
  }

  async remove(id: number) {
    return  null;
  }
}
