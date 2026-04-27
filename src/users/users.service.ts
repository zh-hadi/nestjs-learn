import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

    private users: {id: Number, name: String}[] = [
        {id: 1, name: "Hadiuzzaman"},
        {id: 2, name: "babor"}
    ];

    getAll() {
        return this.users;
    }


    findById(id: Number){
        return this.users.filter(user => user.id === id);
    }



}
