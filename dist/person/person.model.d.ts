/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Schema as MongooseSchema, Document } from 'mongoose';
export declare class Person {
    _id: MongooseSchema.Types.ObjectId;
    name: string;
    hobbies: MongooseSchema.Types.ObjectId[];
}
export type PersonDocument = Person & Document;
export declare const PersonSchema: MongooseSchema<Person, import("mongoose").Model<Person, any, any, any, Document<unknown, any, Person> & Person & Required<{
    _id: MongooseSchema.Types.ObjectId;
}>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Person, Document<unknown, {}, import("mongoose").FlatRecord<Person>> & import("mongoose").FlatRecord<Person> & Required<{
    _id: MongooseSchema.Types.ObjectId;
}>>;
