'use client';

import { GetProductCategories } from '@okkino/web/data-access-graphql';
import { FC } from 'react';
import { Locale } from '../../../../../i18n/i18n-config';
import { ALL_CATEGORY } from '../../../shop/[category]/constants';
import { DesktopSubmenu } from './desktop-submenu';

interface IProps {
  navigationTranslation: Record<string, string>;
  productCategoriesTranslation: Record<string, string>;
  productCategories: GetProductCategories['productCategories'];
  locale: Locale;
}

export const DesktopMenu: FC<IProps> = (props) => {
  const { locale, navigationTranslation, productCategories, productCategoriesTranslation } = props;

  return (
    <div className="flex hidden items-center gap-10 md:block">
      <DesktopSubmenu
        menuName={navigationTranslation.shop}
        itemsList={[ALL_CATEGORY, ...productCategories.map((category) => category.name)]}
        translations={productCategoriesTranslation}
        getNavigationPath={(itemKeyName) => `/${locale}/shop/${itemKeyName}`}
      />
    </div>
  );
};
