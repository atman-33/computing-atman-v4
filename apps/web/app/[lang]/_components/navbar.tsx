import Image from 'next/image';
import Link from 'next/link';
import { Games } from '../games/games';
import { Sites } from '../sites/sites';

export default function Navbar() {
  return (
    <nav className="navbar bg-base-100">
      <div className="ml-4 flex-1">
        <Link href="/">
          <Image alt="logo" src="/logo.svg" width={32} height={32} />
          <a className="btn btn-ghost text-xl normal-case" href="/">
            Computing Atman
          </a>
        </Link>
      </div>

      <div className="mr-4 hidden flex-none sm:block">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <details>
              <summary>Sites</summary>
              <ul className="bg-base-100 p-2">
                {Sites.map((site, index) => (
                  <li key={index}>
                    <Link href={site.url} target={site.isBlank === 'true' ? '_blank' : '_self'}>
                      <span className="whitespace-normal">{site.name} </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary>Games</summary>
              <ul className="bg-base-100 p-2">
                {Games.map((game, index) => (
                  <li key={index}>
                    <Link href={game.url} target={game.isBlank === 'true' ? '_blank' : '_self'}>
                      <span className="whitespace-normal">{game.name} </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </nav>
  );
}
