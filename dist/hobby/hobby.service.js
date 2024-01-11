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
exports.HobbyService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const hobby_model_1 = require("./hobby.model");
const mongoose_2 = require("mongoose");
let HobbyService = class HobbyService {
    constructor(hobbyModel) {
        this.hobbyModel = hobbyModel;
    }
    async list(filters) {
        return await this.hobbyModel.find({ ...filters });
    }
    async getById(_id) {
        return await this.hobbyModel.findById(_id);
    }
    async create(payload) {
        const newHobby = new this.hobbyModel(payload);
        return await newHobby.save();
    }
    async update(payload) {
        return await this.hobbyModel.findByIdAndUpdate(payload._id, payload, {
            new: true,
        });
    }
    async delete(_id) {
        return await this.hobbyModel.findByIdAndDelete(_id);
    }
};
exports.HobbyService = HobbyService;
exports.HobbyService = HobbyService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(hobby_model_1.Hobby.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], HobbyService);
//# sourceMappingURL=hobby.service.js.map