import '../../../../styles/global.css';

// import { Lato } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';
import { gql } from '../../../../data-access/graphql-client';
import { getDictionary } from '../../../../i18n/get-dictionary';
import { Locale, i18n } from '../../../../i18n/i18n-config';
import { RouteName } from './_components/common/constants';
import { DesktopMenu } from './_components/menu/desktop-menu/desktop-menu';
import { LocaleSwitcher } from './_components/menu/locale-switcher';
import MobileMenu from './_components/menu/mobile-menu/mobile-menu';

// const lato = Lato({
//   weight: ['400', '700'],
//   display: 'swap',
//   style: 'normal',
//   subsets: ['latin']
// });

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params
}: {
  children: ReactNode;
  params: { lang: Locale };
}) {
  const t = await getDictionary(params.lang);
  const { productCategories } = await gql.GetProductCategories();

  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-screen-2xl pl-6 pr-6 md:pl-14 md:pr-14">
        <nav className="flex h-20 items-center justify-between md:h-28 lg:h-36">
          <Link href={`/${params.lang}/${RouteName.root}`}>
            <Image
              src={'/static/logo-okkino.svg'}
              width={85}
              height={15}
              alt={'logo'}
              className="md:h-5 md:w-28"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </Link>

          <div className="flex items-center gap-10">
            <DesktopMenu
              navigationTranslation={t.navigation}
              productCategoriesTranslation={t.product_categories}
              productCategories={productCategories}
              locale={params.lang}
            />

            <MobileMenu
              navigationTranslation={t.navigation}
              productCategoriesTranslation={t.product_categories}
              productCategories={productCategories}
              locale={params.lang}
            />

            <LocaleSwitcher locale={params.lang} />
          </div>
        </nav>
        {children}
        <footer className="h-20 md:h-28 lg:h-36" />
      </div>
    </div>
  );
}
