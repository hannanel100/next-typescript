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
exports.PersonService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const person_model_1 = require("./person.model");
const mongoose_2 = require("mongoose");
let PersonService = class PersonService {
    constructor(personModel) {
        this.personModel = personModel;
    }
    async create(createPersonInput) {
        const createdPerson = new this.personModel(createPersonInput);
        return await createdPerson.save();
    }
    async findAll() {
        return await this.personModel.find();
    }
    async getById(_id) {
        return await this.personModel.findById(_id);
    }
    async update(updatePersonInput) {
        return await this.personModel.findByIdAndUpdate(updatePersonInput._id, updatePersonInput, { new: true });
    }
    async delete(_id) {
        return await this.personModel.findByIdAndDelete(_id);
    }
    async list(filters) {
        return await this.personModel.find({ ...filters });
    }
};
exports.PersonService = PersonService;
exports.PersonService = PersonService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(person_model_1.Person.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], PersonService);
//# sourceMappingURL=person.service.js.map