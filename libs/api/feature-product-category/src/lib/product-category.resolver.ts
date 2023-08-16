import { ProductCategory } from '@libs/api/generated-db-types';
import { Query, Resolver } from '@nestjs/graphql';
import { ProductCategoryService } from './product-category.service';

@Resolver(() => ProductCategory)
export class ProductCategoryResolver {
  constructor(private readonly productCategoryService: ProductCategoryService) {}

  @Query(() => [ProductCategory])
  productCategories() {
    return this.productCategoryService.findAll();
  }
}
