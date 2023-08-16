import { PrismaService } from '@libs/api/data-access-db';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductCategoryService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.productCategory.findMany();
  }
}
