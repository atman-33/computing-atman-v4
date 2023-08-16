import {
  CreateOneHomeBlockArgs,
  DeleteOneHomeBlockArgs,
  FindUniqueHomeBlockArgs,
  HomeBlock,
  UpdateOneHomeBlockArgs
} from '@libs/api/generated-db-types';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { HomeBlockService } from './home-block.service';

@Resolver(() => HomeBlock)
export class HomeBlockResolver {
  constructor(private readonly homeBlockService: HomeBlockService) {}

  @Mutation(() => HomeBlock)
  createHomeBlock(@Args() createOneHomeBlockArgs: CreateOneHomeBlockArgs) {
    return this.homeBlockService.create(createOneHomeBlockArgs);
  }

  @Query(() => [HomeBlock])
  homeBlocks() {
    return this.homeBlockService.findAll();
  }

  @Query(() => HomeBlock)
  homeBlock(@Args() findUniqueHomeBlockArgs: FindUniqueHomeBlockArgs) {
    return this.homeBlockService.findOne(findUniqueHomeBlockArgs);
  }

  @Mutation(() => HomeBlock)
  updateHomeBlock(@Args() updateOneHomeBlockArgs: UpdateOneHomeBlockArgs) {
    return this.homeBlockService.update(updateOneHomeBlockArgs);
  }

  @Mutation(() => HomeBlock)
  removeHomeBlock(@Args() deleteOneHomeBlockArgs: DeleteOneHomeBlockArgs) {
    return this.homeBlockService.remove(deleteOneHomeBlockArgs);
  }
}
