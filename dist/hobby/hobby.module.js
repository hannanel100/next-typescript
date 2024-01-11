"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HobbyModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const hobby_model_1 = require("./hobby.model");
const hobby_service_1 = require("./hobby.service");
const hobby_resolver_1 = require("./hobby.resolver");
let HobbyModule = class HobbyModule {
};
exports.HobbyModule = HobbyModule;
exports.HobbyModule = HobbyModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: hobby_model_1.Hobby.name, schema: hobby_model_1.HobbySchema }]),
        ],
        controllers: [],
        providers: [hobby_service_1.HobbyService, hobby_resolver_1.HobbyResolver],
    })
], HobbyModule);
//# sourceMappingURL=hobby.module.js.map