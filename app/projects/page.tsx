import type { Metadata } from "next";
import SingleColumn from "@/components/layouts/single-column";
import Section from "@/components/section";
import { DynamicGridItem } from "@/components/grid-item";
import { projects } from "@/content/projects";

export const metadata: Metadata = { title: "Projects" };

export default function Projects() {
  return (
    <SingleColumn>
      <div className="max-w-2xl w-full px-4 mx-auto">
        <h3 className="text-xl font-bold mb-4">Projects</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Section key={project.slug}>
              <DynamicGridItem
                type="projects"
                id={project.slug}
                title={project.title}
                thumbnail={project.thumbnail}
              >
                {project.tagline}
              </DynamicGridItem>
            </Section>
          ))}
        </div>
      </div>
    </SingleColumn>
  );
}
