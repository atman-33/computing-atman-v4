import Link from 'next/link';
import { RouteName } from './sites/okkino/_components/common/constants';

export default function page() {
  return (
    <>
      <Link href={`${RouteName.home}`}>Okkino</Link>
    </>
  );
}
