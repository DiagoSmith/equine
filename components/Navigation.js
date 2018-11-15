import Link from "next/link";

const Navigation = () => (
  <div>
    <Link href="/">
      <a> Home </a>
    </Link>
    <Link href="/about">
      <a> About </a>
    </Link>
    <Link href="/services">
      <a> Services </a>
    </Link>
    <Link href="/contact">
      <a> Contact </a>
    </Link>
    <Link href="/gallery">
      <a> Gallery </a>
    </Link>
  </div>
);

export default Navigation;