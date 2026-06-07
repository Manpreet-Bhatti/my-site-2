import Link from "next/link";
import { ChevronRight } from "lucide-react";

export const Title = ({ type, children }: { type: string; children: React.ReactNode }) => (
  <div className="mb-4">
    <Link href={`/${type}`} className="text-accent hover:text-accent-hover transition-colors">
      {type.charAt(0).toUpperCase() + type.slice(1)}
    </Link>
    <ChevronRight size={14} className="inline mx-1 text-current" />
    <h3 className="inline-block text-xl font-bold mb-4">{children}</h3>
  </div>
);

export const WorkImage = ({ src, alt }: { src: string; alt: string }) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img src={src} alt={alt} className="rounded-lg w-full h-auto mb-4" />
);

export const Meta = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-block bg-accent text-white text-xs font-medium px-2 py-0.5 rounded mr-2">
    {children}
  </span>
);
