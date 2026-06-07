import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import SingleColumn from "@/components/layouts/single-column";
import Paragraph from "@/components/paragraph";
import { Meta, Title, WorkImage } from "@/components/work";

export const metadata: Metadata = { title: "Zonado" };

export default function Zonado() {
  return (
    <SingleColumn>
      <div className="max-w-2xl w-full px-4 mx-auto">
        <Title type="work">
          Zonado (Software Development Intern){" "}
          <span className="inline-block bg-accent text-white text-xs font-medium px-2 py-0.5 rounded ml-1">Mar - May 2022</span>
        </Title>
        <Paragraph>A specialised marketplace for Canadian commercial real estate and business sales.</Paragraph>
        <Paragraph>In a paired-programming team, I reshaped the design and user flow, upgraded, and repaired highly trafficked web pages to improve navigation and property management.</Paragraph>
        <Paragraph>This allowed the team to identify SaaS requirements, which were used as the basis for a solo migration I led on the driving framework used in the application.</Paragraph>
        <Paragraph>In addition, I built and scaled the application&apos;s accessibility features so that more than 1000+ users could transact with ease and transparency, increasing client relations and marketing outreach.</Paragraph>
        <Paragraph>I also set up a resilient and reliable payment platform with incentives to increase sales by 2x, creating a subscription model users could follow to truly extract the most out of the application.</Paragraph>
        <ul className="ml-4 my-4 space-y-2">
          <li>
            <Meta>Website</Meta>
            <a className="red-link" href="https://zonado.com/" target="_blank" rel="noopener noreferrer">
              https://zonado.com/ <ExternalLink size={12} className="inline" />
            </a>
          </li>
          <li><Meta>Platform</Meta><span>Web</span></li>
          <li><Meta>Stack</Meta><span>React, TypeScript, Next.js, Prisma, Chakra UI</span></li>
        </ul>
        <WorkImage src="/images/work/zonado_01.jpg" alt="Active wants table" />
        <WorkImage src="/images/work/zonado_02.jpg" alt="Zonado landing page" />
        <WorkImage src="/images/work/zonado_03.jpg" alt="Property image drawer" />
        <WorkImage src="/images/work/zonado_04.jpg" alt="Property image slideshow" />
        <WorkImage src="/images/work/zonado_05.jpg" alt="Zonado plan pricing" />
      </div>
    </SingleColumn>
  );
}
