"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Github, Menu, X } from "lucide-react";
import { ThemeToggleButton } from "./theme-toggle-button";
import { cn } from "@/lib/utils";

const menuItems = [
  { name: "Work", href: "/work" },
  { name: "Projects", href: "/projects" },
  { name: "Source", href: "https://github.com/Manpreet-Bhatti/my-site-2", external: true },
];

const NavLink = ({
  href,
  active,
  external,
  children,
}: {
  href: string;
  active: boolean;
  external?: boolean;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    target={external ? "_blank" : undefined}
    rel={external ? "noopener noreferrer" : undefined}
    className={cn(
      "p-2 transition-colors hover:text-accent",
      active ? "text-accent" : "text-[#1a202c] dark:text-[rgba(255,255,255,0.922)]"
    )}
  >
    {children}
  </Link>
);

const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full backdrop-blur-[10px]">
      <div className="max-w-2xl mx-auto flex p-2 flex-wrap items-center justify-between">
        <div className="flex items-center mr-5">
          <h1 className="text-lg font-semibold tracking-tighter">
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
          </h1>
        </div>

        <div className="hidden md:flex items-center flex-grow gap-1 mt-0">
          {menuItems.map((item) => (
            <NavLink key={item.href} href={item.href} active={pathname === item.href} external={item.external}>
              <span className="inline-flex items-center gap-1">
                {item.name === "Source" && <Github size={14} />}
                {item.name}
              </span>
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggleButton />
          <div className="relative md:hidden">
            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              className="p-2 rounded-md hover:bg-btn-hover-light dark:hover:bg-btn-hover-dark transition-colors"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
            {open && (
              <>
                <div className="fixed inset-0 z-0" onClick={() => setOpen(false)} />
                <div className="absolute right-0 mt-1 w-44 bg-white dark:bg-[#1a1a1a] border border-[#f4f4f4] dark:border-[rgba(255,255,255,0.12)] rounded-md shadow-lg z-10">
                  {[{ name: "Home", href: "/" }, ...menuItems].map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      target={(item as { external?: boolean }).external ? "_blank" : undefined}
                      rel={(item as { external?: boolean }).external ? "noopener noreferrer" : undefined}
                      onClick={() => setOpen(false)}
                      className="block px-4 py-2 text-sm hover:bg-btn-hover-light dark:hover:bg-btn-hover-dark transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
