import { rgbToDataUrl } from '@libs/web/utils-shared';
import Image from 'next/image';
import Link from 'next/link';
import { gql } from '../../../../data-access/graphql-client';
import { webEnv } from '../../../../environments/environment';
import { Locale } from '../../../../i18n/i18n-config';
import { getI18nNavigationPath } from './_components/common/utils';

const { storage } = webEnv;
interface IPageParams {
  params: { lang: Locale };
}

export default async function Page({ params }: IPageParams) {
  const { homeBlocks } = await gql.GetHomeImages();

  return (
    <div className="grid gap-4 lg:grid-cols-2 lg:gap-7 xl:gap-12">
      {homeBlocks.map((block) => {
        const { r, g, b } = block.image.rgbBackground;
        return (
          <Link
            href={getI18nNavigationPath(params.lang, block.navigationPath)}
            key={block.id}
            className="
             relative block flex
             h-[calc(50vh-5.5rem)] min-h-[232px]
             items-center justify-center gap-4 overflow-hidden
             md:h-[calc(50vh-7.5rem)] lg:h-[calc(100vh-18rem)]
             "
          >
            <Image
              src={`${storage.url}/${block.image.imagePath}`}
              alt={block.image.title ?? ''}
              className={
                'hover:transition-{scale} h-full object-cover duration-1000 hover:scale-105 '
              }
              placeholder="blur"
              blurDataURL={rgbToDataUrl(r, g, b)}
              priority
              fill
              title={block.image.title ?? ''}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            ></Image>
          </Link>
        );
      })}
    </div>
  );
}
