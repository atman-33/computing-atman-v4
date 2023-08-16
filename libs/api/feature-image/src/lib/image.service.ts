import { Injectable } from '@nestjs/common';
import { Response } from 'express';
import { join } from 'node:path';

@Injectable()
export class ImageService {
  private readonly distImagePath = 'dist/apps/api/assets/images';

  getImage(folder: string, file: string, res: Response) {
    const imageFilePath = join(process.cwd(), this.distImagePath, folder, file);
    // console.log(imageFilePath);

    // eslint-disable-next-line @typescript-eslint/no-var-requires, unicorn/prefer-module
    const fs = require('node:fs');
    const imageStream = fs.createReadStream(imageFilePath);

    res.type('image/png').send(imageStream);
  }
}
