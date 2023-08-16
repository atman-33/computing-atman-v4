import { PrismaService } from '@libs/api/data-access-db';
import {
  CreateOneProductArgs,
  DeleteOneProductArgs,
  FindUniqueProductArgs,
  UpdateOneProductArgs
} from '@libs/api/generated-db-types';
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { FindAllProductsArgs } from './dto/find-all-products.dto';

const include: Prisma.ProductInclude = {
  images: { include: { rgbBackground: true } },
  productSizes: true,
  availableColors: true
};

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) {}

  create(createOneProductArgs: CreateOneProductArgs) {
    return this.prisma.product.create({
      data: createOneProductArgs.data,
      include
    });
  }

  findAll(findAllProductsArgs: FindAllProductsArgs) {
    return this.prisma.product.findMany({
      where: {
        productCategories: {
          some: {
            name: findAllProductsArgs.productCategory
          }
        }
      },
      include
    });
  }

  findOne(findUniqueProductArgs: FindUniqueProductArgs) {
    return this.prisma.product.findUnique({
      where: findUniqueProductArgs.where,
      include
    });
  }

  update(updateOneProductArgs: UpdateOneProductArgs) {
    return this.prisma.product.update({
      where: updateOneProductArgs.where,
      data: updateOneProductArgs.data,
      include
    });
  }

  remove(deleteOneProductArgs: DeleteOneProductArgs) {
    return this.prisma.product.delete({
      where: deleteOneProductArgs.where
    });
  }
}
