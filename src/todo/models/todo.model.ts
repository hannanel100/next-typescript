import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ObjectId } from 'mongoose';

@ObjectType()
export class Todo {
  @Field(() => String, { description: 'Example field (placeholder)' })
  title: string;

  @Field(() => String, { description: 'Example field (placeholder)' })
  content: string;

  @Field({ description: 'Example field (placeholder)' })
  id?: ObjectId;
}
