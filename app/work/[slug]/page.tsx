import { notFound } from "next/navigation";
import type { Metadata } from "next";
import SingleColumn from "@/components/layouts/single-column";
import { MetaList, Title, WorkImage } from "@/components/work";
import { workEntries } from "@/content/work";

export function generateStaticParams() {
  return workEntries.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = workEntries.find((e) => e.slug === slug);
  return { title: entry?.title ?? "Work" };
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = workEntries.find((e) => e.slug === slug);
  if (!entry) notFound();

  return (
    <SingleColumn>
      <div className="max-w-2xl w-full px-4 mx-auto">
        <Title type="work">
          {entry.title} ({entry.role}){" "}
          <span className="inline-block bg-accent text-white text-xs font-medium px-2 py-0.5 rounded ml-1">
            {entry.period}
          </span>
        </Title>
        {entry.description.map((p, i) => (
          <p key={i} className="text-justify indent-4">{p}</p>
        ))}
        {entry.companyMeta.length > 0 && <MetaList items={entry.companyMeta} />}
        {entry.subProjects.map((sp, i) => (
          <div key={i}>
            <p className="text-accent mt-4">{sp.title}</p>
            {sp.paragraphs?.map((p, j) => (
              <p key={j} className="text-justify indent-4">{p}</p>
            ))}
            <MetaList items={sp.meta} />
          </div>
        ))}
        {entry.images.map((img, i) => (
          <WorkImage key={i} src={img.src} alt={img.alt} />
        ))}
      </div>
    </SingleColumn>
  );
}
