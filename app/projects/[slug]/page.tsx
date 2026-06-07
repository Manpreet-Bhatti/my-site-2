import { notFound } from "next/navigation";
import type { Metadata } from "next";
import SingleColumn from "@/components/layouts/single-column";
import { MetaList, Title, WorkImage } from "@/components/work";
import { projects } from "@/content/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  return { title: project?.title ?? "Project" };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <SingleColumn>
      <div className="max-w-2xl w-full px-4 mx-auto">
        <Title type="projects">
          {project.role}{" "}
          <span className="inline-block bg-accent text-white text-xs font-medium px-2 py-0.5 rounded ml-1">
            {project.period}
          </span>
        </Title>
        {project.paragraphs.map((p, i) => (
          <p key={i} className="text-justify indent-4">{p}</p>
        ))}
        <MetaList items={project.meta} />
        {project.images.map((img, i) => (
          <WorkImage key={i} src={img.src} alt={img.alt} />
        ))}
      </div>
    </SingleColumn>
  );
}
