import { InputType, Int, Field } from '@nestjs/graphql';
import { ObjectId } from 'mongoose';
@InputType()
export class CreateTodoInput {
  @Field(() => String, { description: 'Example field (placeholder)' })
  title: string;

  @Field(() => String, { description: 'Example field (placeholder)' })
  content: string;

  @Field({
    description: 'Example field (placeholder)',
    nullable: true,
  })
  id?: ObjectId;
}
