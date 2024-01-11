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
import { HobbyService } from './hobby.service';
import { Hobby } from './hobby.model';
import { Schema as MongooseSchema } from 'mongoose';
import { CreateHobbyInput, UpdateHobbyInput } from './hobby.inputs';
export declare class HobbyResolver {
    private hobbyService;
    constructor(hobbyService: HobbyService);
    hobbies(): Promise<(import("mongoose").Document<unknown, {}, import("./hobby.model").HobbyDocument> & Hobby & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    hobby(_id: MongooseSchema.Types.ObjectId): Promise<import("mongoose").Document<unknown, {}, import("./hobby.model").HobbyDocument> & Hobby & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    createHobby(payload: CreateHobbyInput): Promise<import("mongoose").Document<unknown, {}, import("./hobby.model").HobbyDocument> & Hobby & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    updateHobby(payload: UpdateHobbyInput): Promise<import("mongoose").Document<unknown, {}, import("./hobby.model").HobbyDocument> & Hobby & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    deleteHobby(_id: MongooseSchema.Types.ObjectId): Promise<import("mongoose").Document<unknown, {}, import("./hobby.model").HobbyDocument> & Hobby & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
