import { StaticImageData } from "next/image";

import thumbMenstruationNation from "@/public/images/projects/menstruation_nation/mnation_logo.png";
import thumbGrafGas from "@/public/images/projects/grafgas.jpg";
import thumbAutoReadmeDocs from "@/public/images/projects/autoreadmedocs.jpg";

import mnationLog from "@/public/images/projects/menstruation_nation/mnation_log.png";
import mnationRecord from "@/public/images/projects/menstruation_nation/mnation_record.png";
import mnationTrack from "@/public/images/projects/menstruation_nation/mnation_track.png";
import mnationCycle from "@/public/images/projects/menstruation_nation/mnation_cycle.png";
import mnationLearn from "@/public/images/projects/menstruation_nation/mnation_learn.png";
import mnationSettings from "@/public/images/projects/menstruation_nation/mnation_settings.png";

import grafgas01 from "@/public/images/projects/grafgas_01.jpg";
import grafgas02 from "@/public/images/projects/grafgas_02.jpg";
import grafgas03 from "@/public/images/projects/grafgas_03.jpg";
import grafgas04 from "@/public/images/projects/grafgas_04.jpg";
import grafgas05 from "@/public/images/projects/grafgas_05.jpg";
import grafgas06 from "@/public/images/projects/grafgas_06.jpg";
import grafgas07 from "@/public/images/projects/grafgas_07.jpg";
import grafgas08 from "@/public/images/projects/grafgas_08.jpg";

import autoreadmedocs01 from "@/public/images/work/autoreadmedocs_01.jpg";
import autoreadmedocs02 from "@/public/images/work/autoreadmedocs_02.jpg";
import autoreadmedocs03 from "@/public/images/work/autoreadmedocs_03.jpg";
import autoreadmedocs04 from "@/public/images/work/autoreadmedocs_04.jpg";

export interface MetaItem {
  label: string;
  value: string;
  href?: string;
}

export interface ContentImage {
  src: StaticImageData;
  alt: string;
}

export interface Project {
  slug: string;
  title: string;
  role: string;
  period: string;
  thumbnail?: StaticImageData;
  tagline: string;
  paragraphs: string[];
  meta: MetaItem[];
  images: ContentImage[];
}

export const projects: Project[] = [
  {
    slug: "cascade",
    title: "Cascade",
    role: "Developer",
    period: "2024",
    tagline: "Distributed log visualizer with real-time WebSocket streaming",
    paragraphs: [
      "A distributed log visualizer that simulates multiple microservices streaming logs to a central ingestor, displayed in real time on a React dashboard via WebSockets.",
      "I built the backend ingestor using Node.js stream.Transform to handle high-volume log streams without memory issues, with Socket.io pushing events to the client instantly.",
      "On the frontend, I used Recharts to visualize logs-per-second and built a scrollable, buffered log table with semantic highlighting by log level.",
    ],
    meta: [
      {
        label: "GitHub",
        value: "https://github.com/Manpreet-Bhatti/Cascade",
        href: "https://github.com/Manpreet-Bhatti/Cascade",
      },
      { label: "Platform", value: "Web" },
      { label: "Stack", value: "Node.js, Express, Socket.io, MongoDB, React, TypeScript, TailwindCSS" },
    ],
    images: [],
  },
  {
    slug: "menstruationnation",
    title: "Menstruation Nation",
    role: "Developer",
    period: "Oct 2022 - Jul 2023",
    thumbnail: thumbMenstruationNation,
    tagline: "A free period tracker designed by youth for youth",
    paragraphs: ["A free period tracker designed by youth for youth."],
    meta: [
      {
        label: "Website",
        value: "https://play.google.com/store/apps/details?id=com.tpp.theperiodpurse",
        href: "https://play.google.com/store/apps/details?id=com.tpp.theperiodpurse",
      },
      {
        label: "GitHub",
        value: "https://github.com/uoftblueprint/the-period-purse-2023",
        href: "https://github.com/uoftblueprint/the-period-purse-2023",
      },
      { label: "Platform", value: "Mobile" },
      { label: "Stack", value: "Kotlin, Android Jetpack, Room" },
    ],
    images: [
      { src: mnationLog, alt: "Log your period" },
      { src: mnationRecord, alt: "Record multiple period days at once" },
      { src: mnationTrack, alt: "Keep track of symptoms" },
      { src: mnationCycle, alt: "Understand your cycle" },
      { src: mnationLearn, alt: "Learn more about periods" },
      { src: mnationSettings, alt: "Customize your experience" },
    ],
  },
  {
    slug: "grafgas",
    title: "Graf-Gas",
    role: "Front End Lead",
    period: "Oct 2021 - Present",
    thumbnail: thumbGrafGas,
    tagline:
      "A data analytical dashboard with a focus on fleet driver fuel consumption and transportation efficiency",
    paragraphs: [
      "A data analytical dashboard with a focus on fleet driver fuel consumption and transportation efficiency.",
      "I built a majority of the front end used on a daily basis by closely working clients to adhere to requested features, creating transparency for users so that metrics are shown accurately.",
      "In doing so, I entirely automated Peru gas stations' data entry operations, migrating from an Excel-based to a SaaS application. Data is now collected, processed, and stored on the cloud, and displayed in a table and KPIs. In addition, customers can get an excel report of their data for further research.",
      "To achieve such feats, I worked with fellow developers to implement a rigorous in-house DevOps environment and created a CI/CD pipeline to deploy code to micro-services hosted on AWS.",
    ],
    meta: [
      { label: "Website", value: "https://www.grafgas.com/login", href: "https://www.grafgas.com/login" },
      { label: "Platform", value: "Web" },
      { label: "Stack", value: "React, Redux, Django, AWS, PostgreSQL" },
    ],
    images: [
      { src: grafgas01, alt: "Graf-Gas login" },
      { src: grafgas02, alt: "Graf-Gas company info" },
      { src: grafgas03, alt: "Graf-Gas front page" },
      { src: grafgas04, alt: "Graf-Gas profile page" },
      { src: grafgas05, alt: "Graf-Gas profile page in edit mode" },
      { src: grafgas06, alt: "Graf-Gas fuel consumption table" },
      { src: grafgas07, alt: "Graf-Gas fuel consumption KPIs" },
      { src: grafgas08, alt: "Graf-Gas fuel consumption KPIs continued" },
    ],
  },
  {
    slug: "autoreadmedocs",
    title: "Auto README Docs",
    role: "Co-Contributor",
    period: "Jul - Sep 2020",
    thumbnail: thumbAutoReadmeDocs,
    tagline:
      "A web application that helps automate the README creation of GitHub repository file structures",
    paragraphs: [
      "A web application that helps automate the README creation of GitHub repository file structures.",
      "In a paired, test-driven development environment, I worked closely with the GitHub REST API to pull and recursively generate markdown tree structures from provided repositories.",
      "As a result, I worked to continuously deliver scalable features while creating a minimalistic UI design with a robust architecture, all of which were thoroughly and frequently reviewed.",
    ],
    meta: [
      {
        label: "Website",
        value: "https://project-structure-readme.netlify.app/",
        href: "https://project-structure-readme.netlify.app/",
      },
      {
        label: "GitHub",
        value: "https://github.com/cheapreats/auto-readme-docs",
        href: "https://github.com/cheapreats/auto-readme-docs",
      },
      { label: "Platform", value: "Web" },
      { label: "Stack", value: "React, TypeScript" },
    ],
    images: [
      { src: autoreadmedocs01, alt: "Auto README Docs front page" },
      { src: autoreadmedocs02, alt: "Auto README Docs badges" },
      { src: autoreadmedocs03, alt: "Auto README Docs markdown tree" },
      { src: autoreadmedocs04, alt: "Auto README Docs markdown tree continued" },
    ],
  },
];
