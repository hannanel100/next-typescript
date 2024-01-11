import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId, SchemaTypes } from 'mongoose';

export type TodoDocument = Todo & Document;

@Schema()
export class Todo {
  @Prop()
  title: string;

  @Prop()
  content: string;

  @Prop({ type: SchemaTypes.ObjectId })
  _id?: ObjectId;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);
