import { PrismaModule } from '@libs/api/data-access-db';
import { Module } from '@nestjs/common';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';

@Module({
  providers: [UserResolver, UserService],
  imports: [PrismaModule],
})
export class UserModule {}
