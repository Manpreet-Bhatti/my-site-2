import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import SingleColumn from "@/components/layouts/single-column";
import Paragraph from "@/components/paragraph";
import { Meta, Title, WorkImage } from "@/components/work";

export const metadata: Metadata = { title: "Graf-Gas" };

export default function GrafGas() {
  return (
    <SingleColumn>
      <div className="max-w-2xl w-full px-4 mx-auto">
        <Title type="projects">
          Front End Lead <span className="inline-block bg-accent text-white text-xs font-medium px-2 py-0.5 rounded ml-1">Oct 2021 - Present</span>
        </Title>
        <Paragraph>A data analytical dashboard with a focus on fleet driver fuel consumption and transportation efficiency.</Paragraph>
        <Paragraph>I built a majority of the front end used on a daily basis by closely working clients to adhere to requested features, creating transparency for users so that metrics are shown accurately.</Paragraph>
        <Paragraph>In doing so, I entirely automated Peru gas stations&apos; data entry operations, migrating from an Excel-based to a SaaS application. Data is now collected, processed, and stored on the cloud, and displayed in a table and KPIs. In addition, customers can get an excel report of their data for further research.</Paragraph>
        <Paragraph>To achieve such feats, I worked with fellow developers to implement a rigorous in-house DevOps environment and created a CI/CD pipeline to deploy code to micro-services hosted on AWS.</Paragraph>
        <ul className="ml-4 my-4 space-y-2">
          <li>
            <Meta>Website</Meta>
            <a className="red-link" href="https://www.grafgas.com/login" target="_blank" rel="noopener noreferrer">
              https://www.grafgas.com/login <ExternalLink size={12} className="inline" />
            </a>
          </li>
          <li><Meta>Platform</Meta><span>Web</span></li>
          <li><Meta>Stack</Meta><span>React, Redux, Django, AWS, PostgreSQL</span></li>
        </ul>
        <WorkImage src="/images/projects/grafgas_01.jpg" alt="Graf-Gas login" />
        <WorkImage src="/images/projects/grafgas_02.jpg" alt="Graf-Gas company info" />
        <WorkImage src="/images/projects/grafgas_03.jpg" alt="Graf-Gas front page" />
        <WorkImage src="/images/projects/grafgas_04.jpg" alt="Graf-Gas profile page" />
        <WorkImage src="/images/projects/grafgas_05.jpg" alt="Graf-Gas profile page in edit mode" />
        <WorkImage src="/images/projects/grafgas_06.jpg" alt="Graf-Gas fuel consumption table" />
        <WorkImage src="/images/projects/grafgas_07.jpg" alt="Graf-Gas fuel consumption KPIs" />
        <WorkImage src="/images/projects/grafgas_08.jpg" alt="Graf-Gas fuel consumption KPIs continued" />
      </div>
    </SingleColumn>
  );
}
