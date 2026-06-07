import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import SingleColumn from "@/components/layouts/single-column";
import Paragraph from "@/components/paragraph";
import { Meta, Title, WorkImage } from "@/components/work";

export const metadata: Metadata = { title: "CheaprEats" };

export default function CheaprEats() {
  return (
    <SingleColumn>
      <div className="max-w-2xl w-full px-4 mx-auto">
        <Title type="work">
          CheaprEats (Front End Engineering Intern){" "}
          <span className="inline-block bg-accent text-white text-xs font-medium px-2 py-0.5 rounded ml-1">May - Sep 2020</span>
        </Title>
        <Paragraph>A food pickup service that facilitates interactions between customers and vendors while targeting post-secondary students.</Paragraph>
        <ul className="ml-4 my-4 space-y-2">
          <li>
            <Meta>Website</Meta>
            <a className="red-link" href="https://www.cheapreats.com/" target="_blank" rel="noopener noreferrer">
              https://www.cheapreats.com/ <ExternalLink size={12} className="inline" />
            </a>
          </li>
        </ul>
        <p className="text-accent">Location-Based Search</p>
        <Paragraph>While working on CheaprEats&apos;s UI kit, I collaborated with designers to implement a location-based search function, allowing students to strategically find the closest restaurants for food pickup.</Paragraph>
        <ul className="ml-4 my-4 space-y-2">
          <li>
            <Meta>Website</Meta>
            <a className="red-link" href="https://www.cheapreats.com/" target="_blank" rel="noopener noreferrer">
              https://www.cheapreats.com/ <ExternalLink size={12} className="inline" />
            </a>
          </li>
          <li><Meta>Platform</Meta><span>iOS, Android</span></li>
          <li><Meta>Stack</Meta><span>React, TypeScript</span></li>
        </ul>
        <p className="text-accent">Auto README Docs</p>
        <Paragraph>As an initiative for interns, I participated in paired, test-driven development to produce a web application that helps automate the README creation of GitHub repository file structures.</Paragraph>
        <Paragraph>Consequently, I worked closely with the GitHub REST API to pull and recursively build markdown tree structures whilst building a scalable and minimalistic UI design with a robust architecture.</Paragraph>
        <ul className="ml-4 my-4 space-y-2">
          <li>
            <Meta>Website</Meta>
            <a className="red-link" href="https://project-structure-readme.netlify.app/" target="_blank" rel="noopener noreferrer">
              https://project-structure-readme.netlify.app/ <ExternalLink size={12} className="inline" />
            </a>
          </li>
          <li>
            <Meta>GitHub</Meta>
            <a className="red-link" href="https://github.com/cheapreats/auto-readme-docs" target="_blank" rel="noopener noreferrer">
              https://github.com/cheapreats/auto-readme-docs <ExternalLink size={12} className="inline" />
            </a>
          </li>
          <li><Meta>Platform</Meta><span>Web</span></li>
          <li><Meta>Stack</Meta><span>React, TypeScript</span></li>
        </ul>
        <WorkImage src="/images/work/autoreadmedocs_01.jpg" alt="Auto README Docs front page" />
        <WorkImage src="/images/work/autoreadmedocs_02.jpg" alt="Auto README Docs badges" />
        <WorkImage src="/images/work/autoreadmedocs_03.jpg" alt="Auto README Docs markdown tree" />
        <WorkImage src="/images/work/autoreadmedocs_04.jpg" alt="Auto README Docs markdown tree continued" />
      </div>
    </SingleColumn>
  );
}
