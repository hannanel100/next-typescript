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
exports.TodoResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const todo_service_1 = require("./todo.service");
const todo_entity_1 = require("./entities/todo.entity");
const create_todo_input_1 = require("./dto/create-todo.input");
let TodoResolver = class TodoResolver {
    constructor(todoService) {
        this.todoService = todoService;
    }
    createTodo(createTodoInput) {
        return this.todoService.create(createTodoInput);
    }
    findAll() {
        return this.todoService.findAll();
    }
    findOne(id) {
        return this.todoService.findOne({ _id: id });
    }
};
exports.TodoResolver = TodoResolver;
__decorate([
    (0, graphql_1.Mutation)(() => todo_entity_1.Todo),
    __param(0, (0, graphql_1.Args)('createTodoInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_todo_input_1.CreateTodoInput]),
    __metadata("design:returntype", void 0)
], TodoResolver.prototype, "createTodo", null);
__decorate([
    (0, graphql_1.Query)(() => [todo_entity_1.Todo], { name: 'todos' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TodoResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => todo_entity_1.Todo, { name: 'todo' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TodoResolver.prototype, "findOne", null);
exports.TodoResolver = TodoResolver = __decorate([
    (0, graphql_1.Resolver)(() => todo_entity_1.Todo),
    __metadata("design:paramtypes", [todo_service_1.TodoService])
], TodoResolver);
//# sourceMappingURL=todo.resolver.js.map