import { ProductLength } from '@libs/api/generated-db-types';
import { Query, Resolver } from '@nestjs/graphql';
import { ProductLengthService } from './product-length.service';

@Resolver(() => ProductLength)
export class ProductLengthResolver {
  constructor(private readonly productLengthService: ProductLengthService) {}

  @Query(() => [ProductLength])
  productLengths() {
    return this.productLengthService.findAll();
  }
}
