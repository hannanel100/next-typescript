"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const config_1 = require("@nestjs/config");
const posts_module_1 = require("./posts/posts.module");
const database_module_1 = require("./database/database.module");
const users_module_1 = require("./users/users.module");
const Joi = require("joi");
const devtools_integration_1 = require("@nestjs/devtools-integration");
const mongoose_1 = require("@nestjs/mongoose");
const person_module_1 = require("./person/person.module");
const hobby_module_1 = require("./hobby/hobby.module");
const graphql_1 = require("@nestjs/graphql");
const path_1 = require("path");
const apollo_1 = require("@nestjs/apollo");
const cache_manager_1 = require("@nestjs/cache-manager");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            posts_module_1.PostsModule,
            config_1.ConfigModule.forRoot({
                validationSchema: Joi.object({
                    POSTGRES_HOST: Joi.string().required(),
                    POSTGRES_PORT: Joi.number().required(),
                    POSTGRES_USER: Joi.string().required(),
                    POSTGRES_PASSWORD: Joi.string().required(),
                    POSTGRES_DB: Joi.string().required(),
                    PGADMIN_DEFAULT_EMAIL: Joi.string().required(),
                    PGADMIN_DEFAULT_PASSWORD: Joi.string().required(),
                    PORT: Joi.number(),
                    APP_POSTGRES_HOST: Joi.string().required(),
                    JWT_SECRET: Joi.string().required(),
                    JWT_EXPIRATION_TIME: Joi.string().required(),
                    MONGO_USERNAME: Joi.string().required(),
                    MONGO_PASSWORD: Joi.string().required(),
                    MONGO_DATABASE: Joi.string().required(),
                    MONGO_HOST: Joi.string().required(),
                }),
            }),
            mongoose_1.MongooseModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useFactory: async (configService) => {
                    const username = configService.get('MONGO_USERNAME');
                    const password = configService.get('MONGO_PASSWORD');
                    const database = configService.get('MONGO_DATABASE');
                    const host = configService.get('MONGO_HOST');
                    return {
                        uri: `mongodb://${username}:${password}@${host}`,
                        dbName: database,
                    };
                },
                inject: [config_1.ConfigService],
            }),
            database_module_1.DatabaseModule,
            users_module_1.UsersModule,
            devtools_integration_1.DevtoolsModule.register({
                http: process.env.NODE_ENV !== 'production',
            }),
            person_module_1.PersonModule,
            hobby_module_1.HobbyModule,
            graphql_1.GraphQLModule.forRoot({
                autoSchemaFile: (0, path_1.join)(process.cwd(), 'src/schema.gql'),
                driver: apollo_1.ApolloDriver,
                sortSchema: true,
                playground: true,
            }),
            person_module_1.PersonModule,
            hobby_module_1.HobbyModule,
            cache_manager_1.CacheModule.register(),
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map