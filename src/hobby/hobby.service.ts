import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Hobby, HobbyDocument } from './hobby.model';
import { Model, Schema as MongooseSchema } from 'mongoose';
import {
  CreateHobbyInput,
  ListHobbyInput,
  UpdateHobbyInput,
} from './hobby.inputs';

@Injectable()
export class HobbyService {
  constructor(
    @InjectModel(Hobby.name) private readonly hobbyModel: Model<HobbyDocument>,
  ) {}

  async list(filters?: ListHobbyInput) {
    return await this.hobbyModel.find({ ...filters });
  }

  async getById(_id: MongooseSchema.Types.ObjectId) {
    return await this.hobbyModel.findById(_id);
  }

  async create(payload: CreateHobbyInput) {
    const newHobby = new this.hobbyModel(payload);
    return await newHobby.save();
  }

  async update(payload: UpdateHobbyInput) {
    return await this.hobbyModel.findByIdAndUpdate(payload._id, payload, {
      new: true,
    });
  }

  async delete(_id: MongooseSchema.Types.ObjectId) {
    return await this.hobbyModel.findByIdAndDelete(_id);
  }
}
