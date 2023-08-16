import { AuthGuard } from '@libs/api/feature-auth';
import {
  CreateOneProductArgs,
  DeleteOneProductArgs,
  FindUniqueProductArgs,
  Product,
  UpdateOneProductArgs
} from '@libs/api/generated-db-types';
import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { FindAllProductsArgs } from './dto/find-all-products.dto';
import { ProductService } from './product.service';

@Resolver(() => Product)
export class ProductResolver {
  constructor(private readonly productService: ProductService) {}

  @UseGuards(AuthGuard)
  @Mutation(() => Product)
  createProduct(@Args() createOneProductArgs: CreateOneProductArgs) {
    return this.productService.create(createOneProductArgs);
  }

  @Query(() => [Product])
  products(@Args() findAllProductsArgs: FindAllProductsArgs) {
    return this.productService.findAll(findAllProductsArgs);
  }

  @Query(() => Product, { name: 'product' })
  product(@Args() findUniqueProductArgs: FindUniqueProductArgs) {
    return this.productService.findOne(findUniqueProductArgs);
  }

  @UseGuards(AuthGuard)
  @Mutation(() => Product)
  updateProduct(@Args() updateOneProductArgs: UpdateOneProductArgs) {
    return this.productService.update(updateOneProductArgs);
  }

  @UseGuards(AuthGuard)
  @Mutation(() => Product)
  removeProduct(@Args() deleteOneProductArgs: DeleteOneProductArgs) {
    return this.productService.remove(deleteOneProductArgs);
  }
}
