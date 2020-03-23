import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) { }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

    async getUserById(id:number): Promise<User[]> {
        return await this.userRepository.find({ userId: id } );
  }

  //async findByUserid(userId: string): Promise<User[]> {
  //  return await this.userRepository.find(userId);
 // }

  async createOne(user): Promise<User> {
    const Isuser = await this.userRepository.findOne({ userId: user.userId });
    if (!Isuser) {
      return await this.userRepository.save(user);
    }
  }

  

}