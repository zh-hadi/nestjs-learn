import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Student, StudentDocument } from './student.schema';
import { Model } from 'mongoose';

@Injectable()
export class StudentService {
    constructor(
        @InjectModel(Student.name) private studentModel: Model<StudentDocument>
    ){}


    async create(data: Partial<Student>):Promise<Student>
    {
        const newStudent = new this.studentModel(data);
        return newStudent.save();
    }
    async getAll(): Promise<Student[]>
    {
        return this.studentModel.find().exec();
    }

    async findOne(id: string): Promise<Student | null>
    {
        return this.studentModel.findById(id).exec();
    }

    async update(id: string, data: Partial<Student>): Promise<Student | null>
    {
        const update =  this.studentModel.findByIdAndUpdate(id, {
            name: data.name ?? null ,
            age: data.age ?? null ,
            email: data.email ?? null 
        }, {overwrite: true, new: true}).exec();
        return update;
    }

    async patch(id: string, data: Partial<Student>): Promise<Student | null>
    {
        return this.studentModel.findByIdAndUpdate(id, data, {new: true}).exec();
    }

    async remove(id: string): Promise<Student | null>
    {
        return this.studentModel.findByIdAndDelete(id).exec();
    }
}
