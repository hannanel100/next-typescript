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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateHobbyInput = exports.ListHobbyInput = exports.CreateHobbyInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const mongoose_1 = require("mongoose");
let CreateHobbyInput = class CreateHobbyInput {
};
exports.CreateHobbyInput = CreateHobbyInput;
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], CreateHobbyInput.prototype, "name", void 0);
exports.CreateHobbyInput = CreateHobbyInput = __decorate([
    (0, graphql_1.InputType)()
], CreateHobbyInput);
let ListHobbyInput = class ListHobbyInput {
};
exports.ListHobbyInput = ListHobbyInput;
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", mongoose_1.Schema.Types.ObjectId)
], ListHobbyInput.prototype, "_id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], ListHobbyInput.prototype, "name", void 0);
exports.ListHobbyInput = ListHobbyInput = __decorate([
    (0, graphql_1.InputType)()
], ListHobbyInput);
let UpdateHobbyInput = class UpdateHobbyInput {
};
exports.UpdateHobbyInput = UpdateHobbyInput;
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", mongoose_1.Schema.Types.ObjectId)
], UpdateHobbyInput.prototype, "_id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], UpdateHobbyInput.prototype, "name", void 0);
exports.UpdateHobbyInput = UpdateHobbyInput = __decorate([
    (0, graphql_1.InputType)()
], UpdateHobbyInput);
//# sourceMappingURL=hobby.inputs.js.map