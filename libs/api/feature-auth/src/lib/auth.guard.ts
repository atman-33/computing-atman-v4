import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import * as jwt from 'jsonwebtoken';
import { Observable } from 'rxjs';

const splitPem = process.env?.['CLERK_JWT_VERIFICATION_KEY']?.match(/.{1,64}/g) as string[];
const publicKey =
  '-----BEGIN PUBLIC KEY-----\n' + splitPem.join('\n') + '\n-----END PUBLIC KEY-----';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const req = GqlExecutionContext.create(context).getContext().req;
    // console.log(req.cookies);
    const sessToken = req.cookies['__session'];

    jwt.verify(sessToken, publicKey);
    return true;
  }
}
