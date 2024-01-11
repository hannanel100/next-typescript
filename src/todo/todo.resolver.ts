import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TodoService } from './todo.service';
import { Todo } from './entities/todo.entity';
import { CreateTodoInput } from './dto/create-todo.input';
import { UpdateTodoInput } from './dto/update-todo.input';

@Resolver(() => Todo)
export class TodoResolver {
  constructor(private readonly todoService: TodoService) {}

  @Mutation(() => Todo)
  createTodo(@Args('createTodoInput') createTodoInput: CreateTodoInput) {
    return this.todoService.create(createTodoInput);
  }

  @Query(() => [Todo], { name: 'todos' })
  findAll() {
    return this.todoService.findAll();
  }

  @Query(() => Todo, { name: 'todo' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.todoService.findOne({ _id: id });
  }

  // @Mutation(() => Todo)
  // updateTodo(@Args('updateTodoInput') updateTodoInput: UpdateTodoInput) {
  //   return this.todoService.update(updateTodoInput.id, updateTodoInput);
  // }

  // @Mutation(() => Todo)
  // removeTodo(@Args('id', { type: () => Int }) id: number) {
  //   return this.todoService.remove(id);
  // }
}
