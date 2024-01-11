"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const person_model_1 = require("./person.model");
const person_service_1 = require("./person.service");
const mongoose_1 = require("mongoose");
const person_inputs_1 = require("./person.inputs");
let PersonResolver = class PersonResolver {
    constructor(personService) {
        this.personService = personService;
    }
    async person(_id) {
        return this.personService.getById(_id);
    }
    async persons(filters) {
        return this.personService.list(filters);
    }
    async createPerson(payload) {
        return this.personService.create(payload);
    }
    async updatePerson(payload) {
        return this.personService.update(payload);
    }
    async deletePerson(_id) {
        return this.personService.delete(_id);
    }
};
exports.PersonResolver = PersonResolver;
__decorate([
    (0, graphql_1.Query)(() => person_model_1.Person),
    __param(0, (0, graphql_1.Args)('_id', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mongoose_1.Schema.Types.ObjectId]),
    __metadata("design:returntype", Promise)
], PersonResolver.prototype, "person", null);
__decorate([
    (0, graphql_1.Query)(() => [person_model_1.Person]),
    __param(0, (0, graphql_1.Args)('filters', { nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [person_inputs_1.ListPersonInput]),
    __metadata("design:returntype", Promise)
], PersonResolver.prototype, "persons", null);
__decorate([
    (0, graphql_1.Mutation)(() => person_model_1.Person),
    __param(0, (0, graphql_1.Args)('payload')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [person_inputs_1.CreatePersonInput]),
    __metadata("design:returntype", Promise)
], PersonResolver.prototype, "createPerson", null);
__decorate([
    (0, graphql_1.Mutation)(() => person_model_1.Person),
    __param(0, (0, graphql_1.Args)('payload')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [person_inputs_1.UpdatePersonInput]),
    __metadata("design:returntype", Promise)
], PersonResolver.prototype, "updatePerson", null);
__decorate([
    (0, graphql_1.Mutation)(() => person_model_1.Person),
    __param(0, (0, graphql_1.Args)('_id', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mongoose_1.Schema.Types.ObjectId]),
    __metadata("design:returntype", Promise)
], PersonResolver.prototype, "deletePerson", null);
exports.PersonResolver = PersonResolver = __decorate([
    (0, graphql_1.Resolver)(() => person_model_1.Person),
    __metadata("design:paramtypes", [person_service_1.PersonService])
], PersonResolver);
//# sourceMappingURL=person.resolver.js.map