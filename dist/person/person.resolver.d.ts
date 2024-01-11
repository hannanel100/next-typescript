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
import { Person } from './person.model';
import { PersonService } from './person.service';
import { Schema as MongooseSchema } from 'mongoose';
import { CreatePersonInput, ListPersonInput, UpdatePersonInput } from './person.inputs';
export declare class PersonResolver {
    private personService;
    constructor(personService: PersonService);
    person(_id: MongooseSchema.Types.ObjectId): Promise<import("mongoose").Document<unknown, {}, import("./person.model").PersonDocument> & Person & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    persons(filters?: ListPersonInput): Promise<(import("mongoose").Document<unknown, {}, import("./person.model").PersonDocument> & Person & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    createPerson(payload: CreatePersonInput): Promise<import("mongoose").Document<unknown, {}, import("./person.model").PersonDocument> & Person & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    updatePerson(payload: UpdatePersonInput): Promise<import("mongoose").Document<unknown, {}, import("./person.model").PersonDocument> & Person & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    deletePerson(_id: MongooseSchema.Types.ObjectId): Promise<import("mongoose").Document<unknown, {}, import("./person.model").PersonDocument> & Person & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
