// app/components/NavBar.tsx
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="flex justify-end py-4 space-x-3 mx-8 text-white">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/coffee-history">Coffee History</Link>
    </nav>
  );
}
