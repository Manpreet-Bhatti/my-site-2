import type { Metadata } from "next";
import SingleColumn from "@/components/layouts/single-column";
import Section from "@/components/section";
import { DynamicGridItem } from "@/components/grid-item";

import thumbAgentnoon from "@/public/images/work/agentnoon/agentnoon.jpg";
import thumbCriticalMass from "@/public/images/work/critical-mass.jpg";
import thumbZonado from "@/public/images/work/zonado.jpg";
import thumbIvedha from "@/public/images/work/ivedha.jpg";
import thumbCheaprEats from "@/public/images/work/cheapreats.jpg";
import thumbBenchMarkedStudios from "@/public/images/work/benchmarkedstudios.jpg";

export const metadata: Metadata = { title: "Recent work" };

export default function Work() {
  return (
    <SingleColumn>
      <div className="max-w-2xl w-full px-4 mx-auto">
        <p>
          Need a formal review? Check out{" "}
          <a className="red-link" href="https://www.res.manpreetbhatti.com/" target="_blank" rel="noopener noreferrer">
            my resume
          </a>
          !
        </p>
        <h3 className="text-xl font-bold my-4">Recent work</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Section>
            <DynamicGridItem type="work" id="agentnoon" title="Agentnoon" thumbnail={thumbAgentnoon}>
              A software company that provides Real Time Work Force Planning for Fast HR System Integrations
            </DynamicGridItem>
          </Section>
          <Section>
            <DynamicGridItem type="work" id="criticalmass" title="Critical Mass" thumbnail={thumbCriticalMass}>
              A full-service digital experience design agency with a relentless focus on the customer
            </DynamicGridItem>
          </Section>
          <Section delay={0.1}>
            <DynamicGridItem type="work" id="zonado" title="Zonado" thumbnail={thumbZonado}>
              A specialised marketplace for Canadian commercial real estate and business sales
            </DynamicGridItem>
          </Section>
        </div>

        <Section delay={0.2}>
          <hr className="my-6 border-[rgba(0,0,0,0.1)] dark:border-[rgba(255,255,255,0.1)]" />
          <h3 className="text-xl font-bold mb-4">Previous work</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Section delay={0.3}>
              <DynamicGridItem type="work" id="ivedha" title="iVedha" thumbnail={thumbIvedha}>
                A leading global cloud managed services provider for enterprises in Canada, USA, Mexico and across the world
              </DynamicGridItem>
            </Section>
            <Section delay={0.3}>
              <DynamicGridItem type="work" id="cheapreats" title="CheaprEats" thumbnail={thumbCheaprEats}>
                A food pickup service that facilitates interactions between customers and vendors while targeting post-secondary students
              </DynamicGridItem>
            </Section>
            <Section delay={0.3}>
              <DynamicGridItem type="work" id="benchmarkedstudios" title="benchMarked Studios" thumbnail={thumbBenchMarkedStudios}>
                A consulting agency that looks to solve problems with robust, tested, specifically engineered software
              </DynamicGridItem>
            </Section>
          </div>
        </Section>
      </div>
    </SingleColumn>
  );
}
