'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC, useState } from 'react';
import { Locale, i18n } from '../../../../../../i18n/i18n-config';
import { redirectedPathName } from '../common/utils';

interface IProps {
  locale: Locale;
}

export const LocaleSwitcher: FC<IProps> = (props) => {
  const { locale: currentLocale } = props;
  const pathName = usePathname();
  const [activeClasses, setClasses] = useState('opacity-0 -z-10');
  const otherLocales = i18n.locales.filter((locale) => locale !== currentLocale);

  const handleMouseEnter = () => {
    setClasses('opacity-100 z-10');
  };

  const handleMouseLeave = () => {
    setClasses('opacity-0 -z-10');
  };

  return (
    <span
      className="relative cursor-pointer whitespace-nowrap text-xs uppercase"
      onMouseOver={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {currentLocale}

      <div
        className={
          'transition-{opacity} absolute w-full duration-300 ease-in-out' + ' ' + activeClasses
        }
      >
        <ul>
          {otherLocales.map((locale) => (
            <li
              key={locale}
              className="okkino-text-hover relative mb-4 mt-4 text-xs uppercase tracking-wide"
            >
              <Link href={redirectedPathName(pathName, locale)}>{locale}</Link>
            </li>
          ))}
        </ul>
      </div>
    </span>
  );
};
