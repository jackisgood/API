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

    async getUserById(id:number): Promise<User> {
        return await this.userRepository.findOne({ 'userId': id } );
  }

  //async findByUserid(userId: string): Promise<User[]> {
  //  return await this.userRepository.find(userId);
 // }

  async createOne(user): Promise<User> {
	  user.userId=parseInt(user.userId);
	  user.Status=parseInt(user.Status);
	  user.Status_time=user.Status_time*1;
    const Isuser = await this.userRepository.findOne({ userId: user.userId });
    if (!Isuser) {
      return await this.userRepository.save(user);
    }
	
  }

  async updateLasttime(param) {
	  const user = await this.userRepository.findOne({ userId: param.userId });
	  const query: any = {};
	  
	  if (param.time > user.Status_time) {
      await this.userRepository.update(user.userId , param.time );
      
    }
  }


}