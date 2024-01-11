import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Person, PersonDocument } from './person.model';
import { Model, Schema as MongooseSchema } from 'mongoose';
import {
  CreatePersonInput,
  ListPersonInput,
  UpdatePersonInput,
} from './person.inputs';
@Injectable()
export class PersonService {
  constructor(
    @InjectModel(Person.name)
    private readonly personModel: Model<PersonDocument>,
  ) {}

  async create(createPersonInput: CreatePersonInput) {
    const createdPerson = new this.personModel(createPersonInput);
    return await createdPerson.save();
  }

  async findAll() {
    return await this.personModel.find();
  }

  async getById(_id: MongooseSchema.Types.ObjectId) {
    return await this.personModel.findById(_id);
  }

  async update(updatePersonInput: UpdatePersonInput) {
    return await this.personModel.findByIdAndUpdate(
      updatePersonInput._id,
      updatePersonInput,
      { new: true },
    );
  }

  async delete(_id: MongooseSchema.Types.ObjectId) {
    return await this.personModel.findByIdAndDelete(_id);
  }

  async list(filters: ListPersonInput) {
    return await this.personModel.find({ ...filters });
  }
}
