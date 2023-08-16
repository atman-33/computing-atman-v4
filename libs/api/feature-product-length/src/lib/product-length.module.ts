import { PrismaService } from '@libs/api/data-access-db';
import { Module } from '@nestjs/common';
import { ProductLengthResolver } from './product-length.resolver';
import { ProductLengthService } from './product-length.service';

@Module({
  providers: [ProductLengthResolver, ProductLengthService, PrismaService]
})
export class ProductLengthModule {}
