import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Link
        className="text-[#2D65E4] font-bold text-center text-2xl"
        href="/login"
      >
        Login
      </Link>
      
    </main>
  );
}
