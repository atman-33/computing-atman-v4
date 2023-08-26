'use client';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { Locale, i18n } from '../i18n/i18n-config';
import { Button } from './[lang]/sites/okkino/_components/button';

export default function NotFound() {
  const pathname = usePathname();
  const router = useRouter();
  const locale = pathname.split('/')[1] as Locale;

  const handleClick = () => {
    i18n.locales.includes(locale);
    router.push(i18n.locales.includes(locale) ? `/${locale}` : '/');
  };

  return (
    <html lang="en">
      <body className="flex h-screen flex-col items-center justify-center">
        <Image
          src={'/static/logo.svg'}
          width={85}
          height={15}
          alt={'logo'}
          className="-scale-100 md:h-5 md:w-28"
        />

        <div className="h-10" />

        <p className="text-7xl text-black">404</p>

        <div className="h-7" />

        <p className="text-gray-600">We couldn&apos;t find this page</p>

        <div className="h-20" />

        <Button label="homepage" onClick={handleClick} />
      </body>
    </html>
  );
}
