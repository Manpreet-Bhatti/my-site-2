import Link from "next/link";
import Image, { StaticImageData } from "next/image";

interface GridItemProps {
  children: React.ReactNode;
  href: string;
  title: string;
  thumbnail: StaticImageData;
}

interface DynamicGridItemProps {
  children: React.ReactNode;
  type: string;
  id: string;
  title: string;
  thumbnail?: StaticImageData;
}

const ThumbnailPlaceholder = ({ title }: { title: string }) => (
  <div
    className="rounded-xl flex items-center justify-center w-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700"
    style={{ height: 153 }}
  >
    <span className="text-lg font-bold text-accent px-4 text-center">{title}</span>
  </div>
);

export const GridItem = ({ children, href, title, thumbnail }: GridItemProps) => (
  <div className="w-full text-center">
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center cursor-pointer"
    >
      <Image
        src={thumbnail}
        alt={title}
        className="rounded-xl"
        placeholder="blur"
        loading="lazy"
        height={153}
      />
      <p className="mt-2">{title}</p>
      <p className="text-sm">{children}</p>
    </a>
  </div>
);

export const DynamicGridItem = ({ children, type, id, title, thumbnail }: DynamicGridItemProps) => (
  <div className="w-full text-center">
    <Link href={`/${type}/${id}`} className="flex flex-col items-center cursor-pointer">
      {thumbnail ? (
        <Image
          src={thumbnail}
          alt={title}
          className="rounded-xl"
          placeholder="blur"
          height={153}
        />
      ) : (
        <ThumbnailPlaceholder title={title} />
      )}
      <p className="mt-2 text-xl">{title}</p>
      <p className="text-sm">{children}</p>
    </Link>
  </div>
);
