import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { ChevronRight, ExternalLink } from "lucide-react";
import type { MetaItem } from "@/content/projects";

export const Title = ({ type, children }: { type: string; children: React.ReactNode }) => (
  <div className="mb-4">
    <Link href={`/${type}`} className="text-accent hover:text-accent-hover transition-colors">
      {type.charAt(0).toUpperCase() + type.slice(1)}
    </Link>
    <ChevronRight size={14} className="inline mx-1 text-current" />
    <h3 className="inline-block text-xl font-bold mb-4">{children}</h3>
  </div>
);

export const WorkImage = ({ src, alt }: { src: StaticImageData; alt: string }) => (
  <Image src={src} alt={alt} className="rounded-lg w-full h-auto mb-4" placeholder="blur" />
);

export const Meta = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-block bg-accent text-white text-xs font-medium px-2 py-0.5 rounded mr-2">
    {children}
  </span>
);

export const MetaList = ({ items }: { items: MetaItem[] }) => (
  <ul className="ml-4 my-4 space-y-2">
    {items.map((item, i) => (
      <li key={i}>
        <Meta>{item.label}</Meta>
        {item.href ? (
          <a
            className="red-link"
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.value} <ExternalLink size={12} className="inline" />
          </a>
        ) : (
          <span>{item.value}</span>
        )}
      </li>
    ))}
  </ul>
);
