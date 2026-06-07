import type { Metadata } from "next";
import SingleColumn from "@/components/layouts/single-column";
import Section from "@/components/section";
import { DynamicGridItem } from "@/components/grid-item";

import thumbMenstruationNation from "@/public/images/projects/menstruation_nation/mnation_logo.png";
import thumbGrafGas from "@/public/images/projects/grafgas.jpg";
import thumbAutoReadmeDocs from "@/public/images/projects/autoreadmedocs.jpg";

export const metadata: Metadata = { title: "Projects" };

export default function Projects() {
  return (
    <SingleColumn>
      <div className="max-w-2xl w-full px-4 mx-auto">
        <h3 className="text-xl font-bold mb-4">Projects</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Section>
            <DynamicGridItem type="projects" id="menstruationnation" title="Menstruation Nation" thumbnail={thumbMenstruationNation}>
              A free period tracker designed by youth for youth
            </DynamicGridItem>
          </Section>
          <Section>
            <DynamicGridItem type="projects" id="grafgas" title="Graf-Gas" thumbnail={thumbGrafGas}>
              A data analytical dashboard with a focus on fleet driver fuel consumption and transportation efficiency
            </DynamicGridItem>
          </Section>
          <Section>
            <DynamicGridItem type="projects" id="autoreadmedocs" title="Auto README Docs" thumbnail={thumbAutoReadmeDocs}>
              A web application that helps automate the README creation of GitHub repository file structures
            </DynamicGridItem>
          </Section>
        </div>
      </div>
    </SingleColumn>
  );
}
