import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import SingleColumn from "@/components/layouts/single-column";
import Paragraph from "@/components/paragraph";
import { Meta, Title, WorkImage } from "@/components/work";

export const metadata: Metadata = { title: "Agentnoon" };

export default function Agentnoon() {
  return (
    <SingleColumn>
      <div className="max-w-2xl w-full px-4 mx-auto">
        <Title type="work">
          Agentnoon (Software Developer) <span className="inline-block bg-accent text-white text-xs font-medium px-2 py-0.5 rounded ml-1">Jan 2023 - Present</span>
        </Title>
        <Paragraph>A software company that provides real-time workforce planning for fast HR system integrations.</Paragraph>
        <ul className="ml-4 my-4 space-y-2">
          <li>
            <Meta>Website</Meta>
            <a className="red-link" href="https://agentnoon.com/" target="_blank" rel="noopener noreferrer">
              https://agentnoon.com/ <ExternalLink size={12} className="inline" />
            </a>
          </li>
        </ul>
        <p className="text-accent">S&amp;P 500 Spending Benchmark Tool</p>
        <Paragraph>Supervised the creation of an S&amp;P 500 spending benchmark tool that gave executives access to market information on different industries such R&amp;D OpEx by revenue, G&amp;A OpEx by revenue, and S&amp;M OpEx by revenue.</Paragraph>
        <ul className="ml-4 my-4 space-y-2">
          <li>
            <Meta>Website</Meta>
            <a className="red-link" href="https://benchmark.agentnoon.com/" target="_blank" rel="noopener noreferrer">
              https://benchmark.agentnoon.com/ <ExternalLink size={12} className="inline" />
            </a>
          </li>
          <li><Meta>Platform</Meta><span>Web</span></li>
          <li><Meta>Stack</Meta><span>Python, TypeScript, Vue, Nuxt.js</span></li>
        </ul>
        <p className="text-accent">NoonAI</p>
        <ul className="ml-4 my-4 space-y-2">
          <li><Meta>Website</Meta><span>TBA</span></li>
          <li><Meta>Platform</Meta><span>Web</span></li>
          <li><Meta>Stack</Meta><span>JavaScript, Vue</span></li>
        </ul>
        <p className="text-accent">Agentnoon.com</p>
        <ul className="ml-4 my-4 space-y-2">
          <li>
            <Meta>Website</Meta>
            <a className="red-link" href="https://agentnoon.com/" target="_blank" rel="noopener noreferrer">
              https://agentnoon.com/ <ExternalLink size={12} className="inline" />
            </a>
          </li>
          <li><Meta>Platform</Meta><span>Web</span></li>
          <li><Meta>Stack</Meta><span>Framer, React, JavaScript</span></li>
        </ul>
        <WorkImage src="/images/work/agentnoon/agentnoon_benchmark_01.png" alt="Agentnoon spending benchmark tool landing page" />
        <WorkImage src="/images/work/agentnoon/agentnoon_benchmark_02.png" alt="Agentnoon spending benchmark for the Software industry" />
        <WorkImage src="/images/work/agentnoon/agentnoon_benchmark_03.png" alt="Example org chart for the Software industry" />
      </div>
    </SingleColumn>
  );
}
