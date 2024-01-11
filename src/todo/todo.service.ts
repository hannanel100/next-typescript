import { Injectable } from '@nestjs/common';
import { CreateTodoInput } from './dto/create-todo.input';
import { UpdateTodoInput } from './dto/update-todo.input';
import { InjectModel } from '@nestjs/mongoose';
import { Todo, TodoDocument } from './todo.schema';
import { Model } from 'mongoose';

@Injectable()
export class TodoService {
  constructor(@InjectModel(Todo.name) private todoModel: Model<TodoDocument>) {}
  async create(createTodoInput: CreateTodoInput) {
    const createdTodo = new this.todoModel(createTodoInput);
    const result = await createdTodo.save();
    console.log(result);
    return result;
  }

  async findAll() {
    return await this.todoModel.find();
  }

  async findOne({ _id }: { _id: string }) {
    const todo = await this.todoModel.findById(_id);
    console.log('🚀 ~ TodoService ~ findOne ~ todo:', todo);
    return todo;
  }

  update(id: number, updateTodoInput: UpdateTodoInput) {
    return `This action updates a #${id} todo`;
  }

  remove(id: number) {
    return `This action removes a #${id} todo`;
  }
}
