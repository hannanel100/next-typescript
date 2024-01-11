import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { HobbyService } from './hobby.service';
import { Hobby } from './hobby.model';
import { Schema as MongooseSchema } from 'mongoose';
import { CreateHobbyInput, UpdateHobbyInput } from './hobby.inputs';

@Resolver(() => Hobby)
export class HobbyResolver {
  constructor(private hobbyService: HobbyService) {}

  // Queries
  @Query(() => [Hobby])
  async hobbies() {
    return this.hobbyService.list();
  }

  @Query(() => Hobby)
  async hobby(
    @Args('_id', { type: () => String }) _id: MongooseSchema.Types.ObjectId,
  ) {
    return this.hobbyService.getById(_id);
  }
  // Mutations
  //   create
  @Mutation(() => Hobby)
  async createHobby(@Args('payload') payload: CreateHobbyInput) {
    return this.hobbyService.create(payload);
  }

  //  update
  @Mutation(() => Hobby)
  async updateHobby(@Args('payload') payload: UpdateHobbyInput) {
    return this.hobbyService.update(payload);
  }
  //  delete
  @Mutation(() => Hobby)
  async deleteHobby(
    @Args('_id', { type: () => String }) _id: MongooseSchema.Types.ObjectId,
  ) {
    return this.hobbyService.delete(_id);
  }
}
