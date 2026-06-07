import Link from "next/link";
import Image from "next/image";

const Logo = () => (
  <Link
    href="/"
    className="inline-flex items-center h-[30px] px-[10px] font-bold text-[18px] no-underline text-inherit hover:text-inherit"
  >
    <Image
      src="/images/MB-mono.svg"
      width={20}
      height={20}
      alt="logo"
      priority
      className="transition-all duration-200"
    />
    <span className="font-bold ml-1">Manpreet Bhatti</span>
  </Link>
);

export default Logo;
