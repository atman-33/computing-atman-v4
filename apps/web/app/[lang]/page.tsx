// import { RouteName } from './sites/okkino/_components/common/constants';

import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <>
      <nav className="navbar bg-neutral text-neutral-content">
        <Link href="/">
          <Image alt="logo" src="/logo.svg" width={32} height={32} />
          <a className="btn btn-ghost text-xl normal-case" href="/">
            Computing Atman
          </a>
        </Link>
      </nav>
    </>
  );
}
