import type { Metadata } from 'next';
import Footer from './_components/footer';
import Navbar from './_components/navbar';

export const metadata: Metadata = {
  title: 'Computing Atman',
  description:
    'This website is an information site on system development and programming related to IT.',
  keywords: 'it,system,programming,db',
  twitter: {
    card: 'summary_large_image',
    site: '@atman_33',
    title: 'Computing Atman',
    description:
      'This website is an information site on system development and programming related to IT.',
    images: ['/logo.svg']
  }
};

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-col items-center">
        <div className="w-full max-w-screen-2xl pl-6 pr-6 md:pl-14 md:pr-14">
          <Navbar />

          <main className="flex-grow">
            <div className="md:flex">
              <div className="rounded border bg-yellow-500 p-3">sample 1</div>
              <div className="rounded border bg-yellow-500 p-3">sample 2</div>
              <div className="rounded border bg-yellow-500 p-3">sample 3</div>
            </div>
          </main>

          <Footer />
        </div>
      </div>
    </div>
  );
}
