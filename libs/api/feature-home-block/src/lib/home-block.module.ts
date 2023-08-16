import { PrismaService } from '@libs/api/data-access-db';
import { Module } from '@nestjs/common';
import { HomeBlockResolver } from './home-block.resolver';
import { HomeBlockService } from './home-block.service';

@Module({
  providers: [HomeBlockResolver, HomeBlockService, PrismaService]
})
export class HomeBlockModule {}
