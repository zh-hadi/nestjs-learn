import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class UsersService {

    private users: {id: Number, name: string, email: string, age: number}[] = [
        {id: 1, name: "Hadiuzzaman", email: "zh@gmail.com", age: 25},
        {id: 2, name: "babor", email: "zh@gmail.com", age: 26}
    ];

    getAll() {
        return this.users;
    }


    findById(id: number){
        const user =  this.users.find(user => user.id === id);
        if(!user) throw new NotFoundException("User not found!");

        return user;
    }

    createUser(user:  {name: string, email: string, age: number}){
        const newUser = {id: Date.now(), ...user};
        this.users.push(newUser);
        return newUser; 
    }

    updateUser(id: number, user: {name: string, email: string, age: number}){
        const index = this.users.findIndex(item => item.id === id);

        if(index === -1 ){
            throw new NotFoundException("User not found");
        }

        this.users[index] = {id, ...user};
        return this.users[index];
    }

    patchUser(id: number, data: Partial<{name: string}>){
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
