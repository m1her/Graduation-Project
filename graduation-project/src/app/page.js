import Link from "next/link";

import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: '700',
  subsets: ['latin'],
});

export default function Home() {
  return (
    <main className={roboto.className} >
      <Link
        className="text-[#2D65E4] font-bold text-center text-3xl"
        href="/auth/login"
      >
        Login
      </Link>
      
    </main>
  );
}
