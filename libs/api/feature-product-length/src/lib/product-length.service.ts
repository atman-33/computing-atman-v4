import { PrismaService } from '@libs/api/data-access-db';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductLengthService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.productLength.findMany();
  }
}
