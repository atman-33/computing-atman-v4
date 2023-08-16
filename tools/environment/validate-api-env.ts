// @ts-nocheck

import { plainToInstance, Type } from 'class-transformer';
import {
  IsBoolean,
  IsDefined,
  IsNotEmpty,
  IsNumber,
  IsString,
  ValidateNested,
  validateSync
} from 'class-validator';
import 'reflect-metadata';
import { apiEnv, IApiEnv } from '../../apps/api/src/environments/environment';

export class ApiEnvVo implements IApiEnv {
  @IsBoolean()
  public isProd: boolean;

  @IsDefined()
  @ValidateNested()
  @Type(() => ApiEnvDbVo)
  public db: ApiEnvDbVo;

  @IsDefined()
  @ValidateNested()
  @Type(() => ApiEnvApiVo)
  public api: ApiEnvApiVo;
}

class ApiEnvDbVo {
  @IsNotEmpty()
  @IsString()
  public url: string;
}

class ApiEnvApiVo {
  @IsNumber()
  public port: number;
}

const apiEnvVoInstance = plainToInstance(ApiEnvVo, apiEnv);
const errors = validateSync(apiEnvVoInstance);

if (errors.length) {
  console.error(errors);
  process.exit(1);
}
