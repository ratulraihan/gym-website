import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="flex items-center font-semibold gap-x-6" id="navigation">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/team">Pages</Link>
      <Link href="/">Class</Link>
      <Link href="/about">Schedule</Link>
      <Link href="/team">Blog</Link>
      <Link href="/">Shop</Link>
      <Link href="/about">Contact</Link>
    </nav>
  );
}
