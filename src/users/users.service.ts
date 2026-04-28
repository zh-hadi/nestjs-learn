import { Injectable, NotFoundException } from '@nestjs/common';
import type { User } from './interfaces/users.interface';
import { CreateUserDto } from './dto/createUserDto';

@Injectable()
export class UsersService {

    private users: User[] = [
        {id: 1, name: "Hadiuzzaman", email: "zh@gmail.com", age: 25},
        {id: 2, name: "babor", email: "zh@gmail.com", age: 26}
    ];

    getAll(): User[] {
        return this.users;
    }


    findById(id: number): User{
        const user =  this.users.find(user => user.id === id);
        if(!user) throw new NotFoundException("User not found!");

        return user;
    }

    createUser(user:  CreateUserDto): User{
        const newUser = {id: Date.now(), ...user};
        this.users.push(newUser);
        return newUser; 
    }

    updateUser(id: number, user: CreateUserDto): User{
        const index = this.users.findIndex(item => item.id === id);

        if(index === -1 ){
            throw new NotFoundException("User not found");
        }

        this.users[index] = {id, ...user};
        return this.users[index];
    }

    patchUser(id: number, data: Partial<CreateUserDto>): User{
        const user = this.findById(id);
        Object.assign(user, data);
        return user;
    }

    deleteUser(id: number){
        const index = this.users.findIndex(item => item.id === id);

        if(index === -1 ){
            throw new NotFoundException("User not found");
        }

        const deleted = this.users.splice(index, 1);
        return {message: "User deleted", user: deleted[0]};
    }

}
