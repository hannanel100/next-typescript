import { ObjectId } from 'mongoose';
import { CreateTodoInput } from './create-todo.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateTodoInput extends PartialType(CreateTodoInput) {
  @Field(() => Int)
  id: ObjectId;

  @Field(() => String, {
    description: 'Example field (placeholder)',
    nullable: true,
  })
  title?: string;

  @Field(() => String, {
    description: 'Example field (placeholder)',
    nullable: true,
  })
  content?: string;
}
