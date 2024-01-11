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
exports.HobbyResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const hobby_service_1 = require("./hobby.service");
const hobby_model_1 = require("./hobby.model");
const mongoose_1 = require("mongoose");
const hobby_inputs_1 = require("./hobby.inputs");
let HobbyResolver = class HobbyResolver {
    constructor(hobbyService) {
        this.hobbyService = hobbyService;
    }
    async hobbies() {
        return this.hobbyService.list();
    }
    async hobby(_id) {
        return this.hobbyService.getById(_id);
    }
    async createHobby(payload) {
        return this.hobbyService.create(payload);
    }
    async updateHobby(payload) {
        return this.hobbyService.update(payload);
    }
    async deleteHobby(_id) {
        return this.hobbyService.delete(_id);
    }
};
exports.HobbyResolver = HobbyResolver;
__decorate([
    (0, graphql_1.Query)(() => [hobby_model_1.Hobby]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HobbyResolver.prototype, "hobbies", null);
__decorate([
    (0, graphql_1.Query)(() => hobby_model_1.Hobby),
    __param(0, (0, graphql_1.Args)('_id', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mongoose_1.Schema.Types.ObjectId]),
    __metadata("design:returntype", Promise)
], HobbyResolver.prototype, "hobby", null);
__decorate([
    (0, graphql_1.Mutation)(() => hobby_model_1.Hobby),
    __param(0, (0, graphql_1.Args)('payload')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [hobby_inputs_1.CreateHobbyInput]),
    __metadata("design:returntype", Promise)
], HobbyResolver.prototype, "createHobby", null);
__decorate([
    (0, graphql_1.Mutation)(() => hobby_model_1.Hobby),
    __param(0, (0, graphql_1.Args)('payload')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [hobby_inputs_1.UpdateHobbyInput]),
    __metadata("design:returntype", Promise)
], HobbyResolver.prototype, "updateHobby", null);
__decorate([
    (0, graphql_1.Mutation)(() => hobby_model_1.Hobby),
    __param(0, (0, graphql_1.Args)('_id', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mongoose_1.Schema.Types.ObjectId]),
    __metadata("design:returntype", Promise)
], HobbyResolver.prototype, "deleteHobby", null);
exports.HobbyResolver = HobbyResolver = __decorate([
    (0, graphql_1.Resolver)(() => hobby_model_1.Hobby),
    __metadata("design:paramtypes", [hobby_service_1.HobbyService])
], HobbyResolver);
//# sourceMappingURL=hobby.resolver.js.map