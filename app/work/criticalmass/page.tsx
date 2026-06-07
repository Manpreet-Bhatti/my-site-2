import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import SingleColumn from "@/components/layouts/single-column";
import Paragraph from "@/components/paragraph";
import { Meta, Title, WorkImage } from "@/components/work";

export const metadata: Metadata = { title: "Critical Mass" };

export default function CriticalMass() {
  return (
    <SingleColumn>
      <div className="max-w-2xl w-full px-4 mx-auto">
        <Title type="work">
          Critical Mass (Front End Development Intern){" "}
          <span className="inline-block bg-accent text-white text-xs font-medium px-2 py-0.5 rounded ml-1">May - Aug 2022</span>
        </Title>
        <Paragraph>A full-service digital experience design agency with a relentless focus on the customer.</Paragraph>
        <ul className="ml-4 my-4 space-y-2">
          <li>
            <Meta>Website</Meta>
            <a className="red-link" href="https://www.criticalmass.com/" target="_blank" rel="noopener noreferrer">
              https://www.criticalmass.com/ <ExternalLink size={12} className="inline" />
            </a>
          </li>
        </ul>
        <p className="text-accent">2023 Nissan Maxima</p>
        <Paragraph>I was tasked as the solo developer in the migration of the Nissan Maxima from its 2022 counterpart to the 2023 model, hoping to selling to 138k+ customers in USA.</Paragraph>
        <Paragraph>I was in charge of setting up the content, design, and revamp of components used across multiple subpages in the product line.</Paragraph>
        <ul className="ml-4 my-4 space-y-2">
          <li>
            <Meta>Website</Meta>
            <a className="red-link" href="https://www.nissanusa.com/maxima" target="_blank" rel="noopener noreferrer">
              https://www.nissanusa.com/maxima <ExternalLink size={12} className="inline" />
            </a>
          </li>
          <li><Meta>Platform</Meta><span>Web</span></li>
          <li><Meta>Stack</Meta><span>JavaScript, Adobe AEM, Adobe DAM</span></li>
        </ul>
        <p className="text-accent">Daily Driving Check</p>
        <Paragraph>Once again, as a solo developer, I developed an iOS automation as a means to automate documentation for fleet drivers to ensure their vehicles are in mint condition.</Paragraph>
        <Paragraph>This allowed fleet company management to have easily accessible documentation of their drivers and their respective vehicles for data and insurance purposes.</Paragraph>
        <ul className="ml-4 my-4 space-y-2">
          <li><Meta>Platform</Meta><span>iOS</span></li>
          <li><Meta>Stack</Meta><span>Shortcuts</span></li>
        </ul>
        <p className="text-accent">Nissan ARIYA EV Support Chatbot</p>
        <Paragraph>As the electric vehicle world starts to overshadow its gas rival, many customers are in dire need of support and direction in the purchase and maintenance of an EV.</Paragraph>
        <Paragraph>Nissan&apos;s new ARIYA, a 100% electric crossover, needed the same foundation. To supply this need, I joined a team of 3 developers to create reusable and scalable components to create an ARIYA information hub which answered FAQs in addition to a support chatbot which helped customers with unanswered, immediate questions.</Paragraph>
        <ul className="ml-4 my-4 space-y-2">
          <li><Meta>Website</Meta><span>TBA</span></li>
          <li><Meta>Platform</Meta><span>Web</span></li>
          <li><Meta>Stack</Meta><span>React, Gatsby</span></li>
        </ul>
        <WorkImage src="/images/work/criticalmass_01.jpg" alt="2023 Nissan Maxima" />
      </div>
    </SingleColumn>
  );
}
