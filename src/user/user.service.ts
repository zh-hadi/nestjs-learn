import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) private userRepository: Repository<User> 
    ){}

    async create(userData: Partial<User>){
        const user = this.userRepository.create(userData);
        return this.userRepository.save(user);
    }

    async findAll(): Promise<User[]>
    {
        return this.userRepository.find();
    }

    async findOne(id: number): Promise<User>
    {
        const user =await this.userRepository.findOneBy({id});

        if (!user) {
             throw new NotFoundException(`No user find thid id = ${id}`);        
        }

        return user;
    }

    async update(id: number, updateData: Partial<User>): Promise<User>
    {
        const user =await this.userRepository.findOneBy({id});

        if (!user) {
             throw new NotFoundException(`No user find thid id = ${id}`);        
        }

        const update = Object.assign(user, updateData);

        return this.userRepository.save(update);
    }

    async remove(id: number)
    {
       const result = await this.userRepository.delete(id);

       if(result.affected === 0){
        throw new NotFoundException(`No user find thid id = ${id} `);
       }

       return { message: `User has been deleted id : ${id}`}
    }
}
