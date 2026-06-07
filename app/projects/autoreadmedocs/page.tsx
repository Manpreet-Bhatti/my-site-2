import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import SingleColumn from "@/components/layouts/single-column";
import Paragraph from "@/components/paragraph";
import { Meta, Title, WorkImage } from "@/components/work";

export const metadata: Metadata = { title: "Auto README Docs" };

export default function AutoReadmeDocs() {
  return (
    <SingleColumn>
      <div className="max-w-2xl w-full px-4 mx-auto">
        <Title type="projects">
          Co-Contributor <span className="inline-block bg-accent text-white text-xs font-medium px-2 py-0.5 rounded ml-1">Jul - Sep 2020</span>
        </Title>
        <Paragraph>A web application that helps automate the README creation of GitHub repository file structures.</Paragraph>
        <Paragraph>In a paired, test-driven development environment, I worked closely with the GitHub REST API to pull and recursively generate markdown tree structures from provided repositories.</Paragraph>
        <Paragraph>As a result, I worked to continuously deliver scalable features while creating a minimalistic UI design with a robust architecture, all of which were thoroughly and frequently reviewed.</Paragraph>
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
