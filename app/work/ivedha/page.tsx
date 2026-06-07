import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import SingleColumn from "@/components/layouts/single-column";
import Paragraph from "@/components/paragraph";
import { Meta, Title } from "@/components/work";

export const metadata: Metadata = { title: "iVedha" };

export default function Ivedha() {
  return (
    <SingleColumn>
      <div className="max-w-2xl w-full px-4 mx-auto">
        <Title type="work">
          iVedha (Junior Development Intern){" "}
          <span className="inline-block bg-accent text-white text-xs font-medium px-2 py-0.5 rounded ml-1">May - Sep 2021</span>
        </Title>
        <Paragraph>A leading global cloud managed services provider for enterprises in Canada, USA, Mexico and across the world.</Paragraph>
        <ul className="ml-4 my-4 space-y-2">
          <li>
            <Meta>Website</Meta>
            <a className="red-link" href="https://ivedha.com/" target="_blank" rel="noopener noreferrer">
              https://ivedha.com/ <ExternalLink size={12} className="inline" />
            </a>
          </li>
        </ul>
        <p className="text-accent">NLP Search Engine</p>
        <Paragraph>To make ticket filtering more accurate and reduce duplicate Zendesk tickets, I led a team of 2 other junior developers and managed the delivery of a natural language processing search engine for looking up relevant support tickets based on Stanford&apos;s unsupervised learning algorithm, Global Vectors for Word Representation.</Paragraph>
        <Paragraph>Through the process, I developed and managed automated scripts, continuous builds and deployments. In addition, I participated in design and development of SaaS APIs and performed detailed analysis, design, software integration, and testing to ensure the quality of the product.</Paragraph>
        <Paragraph>At the end of my tenure, I prepared operational procedural documentation for the technical support staff.</Paragraph>
        <ul className="ml-4 my-4 space-y-2">
          <li><Meta>Platform</Meta><span>Cloud</span></li>
          <li><Meta>Stack</Meta><span>Python, Docker, MongoDB</span></li>
        </ul>
        <p className="text-accent">API Hub</p>
        <Paragraph>Accordingly, I built a custom API documentation space, built upon Swagger Hub, to ease access and generate clarity for future and current developers.</Paragraph>
        <ul className="ml-4 my-4 space-y-2">
          <li><Meta>Platform</Meta><span>Web</span></li>
          <li><Meta>Stack</Meta><span>React, Swagger Hub</span></li>
        </ul>
      </div>
    </SingleColumn>
  );
}
