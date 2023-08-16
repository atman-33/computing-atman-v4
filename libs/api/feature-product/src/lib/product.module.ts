import { PrismaService } from '@libs/api/data-access-db';
import { Module } from '@nestjs/common';
import { ProductResolver } from './product.resolver';
import { ProductService } from './product.service';

@Module({
  providers: [ProductResolver, ProductService, PrismaService]
})
export class ProductModule {}
