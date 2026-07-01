import { StaticImageData } from "next/image";

import thumbAgentnoon from "@/public/images/work/agentnoon/agentnoon.jpg";
import thumbCriticalMass from "@/public/images/work/critical-mass.jpg";
import thumbZonado from "@/public/images/work/zonado.jpg";
import thumbIvedha from "@/public/images/work/ivedha.jpg";
import thumbCheaprEats from "@/public/images/work/cheapreats.jpg";
import thumbBenchMarkedStudios from "@/public/images/work/benchmarkedstudios.jpg";

import agentnoonBenchmark01 from "@/public/images/work/agentnoon/agentnoon_benchmark_01.png";
import agentnoonBenchmark02 from "@/public/images/work/agentnoon/agentnoon_benchmark_02.png";
import agentnoonBenchmark03 from "@/public/images/work/agentnoon/agentnoon_benchmark_03.png";

import criticalmass01 from "@/public/images/work/criticalmass_01.jpg";

import zonado01 from "@/public/images/work/zonado_01.jpg";
import zonado02 from "@/public/images/work/zonado_02.jpg";
import zonado03 from "@/public/images/work/zonado_03.jpg";
import zonado04 from "@/public/images/work/zonado_04.jpg";
import zonado05 from "@/public/images/work/zonado_05.jpg";

import autoreadmedocs01 from "@/public/images/work/autoreadmedocs_01.jpg";
import autoreadmedocs02 from "@/public/images/work/autoreadmedocs_02.jpg";
import autoreadmedocs03 from "@/public/images/work/autoreadmedocs_03.jpg";
import autoreadmedocs04 from "@/public/images/work/autoreadmedocs_04.jpg";

import type { MetaItem, ContentImage } from "./projects";

export interface WorkSubProject {
  title: string;
  paragraphs?: string[];
  meta: MetaItem[];
}

export interface WorkEntry {
  slug: string;
  title: string;
  role: string;
  period: string;
  thumbnail: StaticImageData;
  tagline: string;
  description: string[];
  companyMeta: MetaItem[];
  subProjects: WorkSubProject[];
  images: ContentImage[];
  isRecent: boolean;
}

export const workEntries: WorkEntry[] = [
  {
    slug: "agentnoon",
    title: "Dayforce",
    role: "Software Developer, Strategic Workforce Planning",
    period: "Dec 2022 - Present",
    thumbnail: thumbAgentnoon,
    tagline: "Strategic Workforce Planning (formerly Agentnoon)",
    isRecent: true,
    description: [
      "Strategic Workforce Planning (SWP), formerly Agentnoon, provides real-time workforce planning for fast HR system integrations. Acquired by Dayforce in October 2025.",
    ],
    companyMeta: [
      {
        label: "Website",
        value: "https://dayforce.com/",
        href: "https://dayforce.com/",
      },
    ],
    subProjects: [
      {
        title: "S&P 500 Spending Benchmark Tool",
        paragraphs: [
          "Supervised the creation of an S&P 500 spending benchmark tool that gave executives access to market information on different industries such R&D OpEx by revenue, G&A OpEx by revenue, and S&M OpEx by revenue.",
        ],
        meta: [
          {
            label: "Website",
            value: "https://benchmark.agentnoon.com/",
            href: "https://benchmark.agentnoon.com/",
          },
          { label: "Platform", value: "Web" },
          { label: "Stack", value: "Python, TypeScript, Vue, Nuxt.js" },
        ],
      },
      {
        title: "NoonAI",
        meta: [
          { label: "Website", value: "TBA" },
          { label: "Platform", value: "Web" },
          { label: "Stack", value: "JavaScript, Vue" },
        ],
      },
      {
        title: "Agentnoon.com",
        meta: [
          {
            label: "Website",
            value: "https://agentnoon.com/",
            href: "https://agentnoon.com/",
          },
          { label: "Platform", value: "Web" },
          { label: "Stack", value: "Framer, React, JavaScript" },
        ],
      },
    ],
    images: [
      {
        src: agentnoonBenchmark01,
        alt: "Agentnoon spending benchmark tool landing page",
      },
      {
        src: agentnoonBenchmark02,
        alt: "Agentnoon spending benchmark for the Software industry",
      },
      {
        src: agentnoonBenchmark03,
        alt: "Example org chart for the Software industry",
      },
    ],
  },
  {
    slug: "criticalmass",
    title: "Critical Mass",
    role: "Front End Development Intern",
    period: "May - Aug 2022",
    thumbnail: thumbCriticalMass,
    tagline:
      "A full-service digital experience design agency with a relentless focus on the customer",
    isRecent: true,
    description: [
      "A full-service digital experience design agency with a relentless focus on the customer.",
    ],
    companyMeta: [
      {
        label: "Website",
        value: "https://www.criticalmass.com/",
        href: "https://www.criticalmass.com/",
      },
    ],
    subProjects: [
      {
        title: "2023 Nissan Maxima",
        paragraphs: [
          "I was tasked as the solo developer in the migration of the Nissan Maxima from its 2022 counterpart to the 2023 model, hoping to selling to 138k+ customers in USA.",
          "I was in charge of setting up the content, design, and revamp of components used across multiple subpages in the product line.",
        ],
        meta: [
          {
            label: "Website",
            value: "https://www.nissanusa.com/maxima",
            href: "https://www.nissanusa.com/maxima",
          },
          { label: "Platform", value: "Web" },
          { label: "Stack", value: "JavaScript, Adobe AEM, Adobe DAM" },
        ],
      },
      {
        title: "Daily Driving Check",
        paragraphs: [
          "Once again, as a solo developer, I developed an iOS automation as a means to automate documentation for fleet drivers to ensure their vehicles are in mint condition.",
          "This allowed fleet company management to have easily accessible documentation of their drivers and their respective vehicles for data and insurance purposes.",
        ],
        meta: [
          { label: "Platform", value: "iOS" },
          { label: "Stack", value: "Shortcuts" },
        ],
      },
      {
        title: "Nissan ARIYA EV Support Chatbot",
        paragraphs: [
          "As the electric vehicle world starts to overshadow its gas rival, many customers are in dire need of support and direction in the purchase and maintenance of an EV.",
          "Nissan's new ARIYA, a 100% electric crossover, needed the same foundation. To supply this need, I joined a team of 3 developers to create reusable and scalable components to create an ARIYA information hub which answered FAQs in addition to a support chatbot which helped customers with unanswered, immediate questions.",
        ],
        meta: [
          { label: "Website", value: "TBA" },
          { label: "Platform", value: "Web" },
          { label: "Stack", value: "React, Gatsby" },
        ],
      },
    ],
    images: [{ src: criticalmass01, alt: "2023 Nissan Maxima" }],
  },
  {
    slug: "zonado",
    title: "Zonado",
    role: "Software Development Intern",
    period: "Mar - May 2022",
    thumbnail: thumbZonado,
    tagline:
      "A specialised marketplace for Canadian commercial real estate and business sales",
    isRecent: true,
    description: [
      "A specialised marketplace for Canadian commercial real estate and business sales.",
      "In a paired-programming team, I reshaped the design and user flow, upgraded, and repaired highly trafficked web pages to improve navigation and property management.",
      "This allowed the team to identify SaaS requirements, which were used as the basis for a solo migration I led on the driving framework used in the application.",
      "In addition, I built and scaled the application's accessibility features so that more than 1000+ users could transact with ease and transparency, increasing client relations and marketing outreach.",
      "I also set up a resilient and reliable payment platform with incentives to increase sales by 2x, creating a subscription model users could follow to truly extract the most out of the application.",
    ],
    companyMeta: [
      {
        label: "Website",
        value: "https://zonado.com/",
        href: "https://zonado.com/",
      },
      { label: "Platform", value: "Web" },
      {
        label: "Stack",
        value: "React, TypeScript, Next.js, Prisma, Chakra UI",
      },
    ],
    subProjects: [],
    images: [
      { src: zonado01, alt: "Active wants table" },
      { src: zonado02, alt: "Zonado landing page" },
      { src: zonado03, alt: "Property image drawer" },
      { src: zonado04, alt: "Property image slideshow" },
      { src: zonado05, alt: "Zonado plan pricing" },
    ],
  },
  {
    slug: "ivedha",
    title: "iVedha",
    role: "Junior Development Intern",
    period: "May - Sep 2021",
    thumbnail: thumbIvedha,
    tagline:
      "A leading global cloud managed services provider for enterprises in Canada, USA, Mexico and across the world",
    isRecent: false,
    description: [
      "A leading global cloud managed services provider for enterprises in Canada, USA, Mexico and across the world.",
    ],
    companyMeta: [
      {
        label: "Website",
        value: "https://ivedha.com/",
        href: "https://ivedha.com/",
      },
    ],
    subProjects: [
      {
        title: "NLP Search Engine",
        paragraphs: [
          "To make ticket filtering more accurate and reduce duplicate Zendesk tickets, I led a team of 2 other junior developers and managed the delivery of a natural language processing search engine for looking up relevant support tickets based on Stanford's unsupervised learning algorithm, Global Vectors for Word Representation.",
          "Through the process, I developed and managed automated scripts, continuous builds and deployments. In addition, I participated in design and development of SaaS APIs and performed detailed analysis, design, software integration, and testing to ensure the quality of the product.",
          "At the end of my tenure, I prepared operational procedural documentation for the technical support staff.",
        ],
        meta: [
          { label: "Platform", value: "Cloud" },
          { label: "Stack", value: "Python, Docker, MongoDB" },
        ],
      },
      {
        title: "API Hub",
        paragraphs: [
          "Accordingly, I built a custom API documentation space, built upon Swagger Hub, to ease access and generate clarity for future and current developers.",
        ],
        meta: [
          { label: "Platform", value: "Web" },
          { label: "Stack", value: "React, Swagger Hub" },
        ],
      },
    ],
    images: [],
  },
  {
    slug: "cheapreats",
    title: "CheaprEats",
    role: "Front End Engineering Intern",
    period: "May - Sep 2020",
    thumbnail: thumbCheaprEats,
    tagline:
      "A food pickup service that facilitates interactions between customers and vendors while targeting post-secondary students",
    isRecent: false,
    description: [
      "A food pickup service that facilitates interactions between customers and vendors while targeting post-secondary students.",
    ],
    companyMeta: [
      {
        label: "Website",
        value: "https://www.cheapreats.com/",
        href: "https://www.cheapreats.com/",
      },
    ],
    subProjects: [
      {
        title: "Location-Based Search",
        paragraphs: [
          "While working on CheaprEats's UI kit, I collaborated with designers to implement a location-based search function, allowing students to strategically find the closest restaurants for food pickup.",
        ],
        meta: [
          {
            label: "Website",
            value: "https://www.cheapreats.com/",
            href: "https://www.cheapreats.com/",
          },
          { label: "Platform", value: "iOS, Android" },
          { label: "Stack", value: "React, TypeScript" },
        ],
      },
      {
        title: "Auto README Docs",
        paragraphs: [
          "As an initiative for interns, I participated in paired, test-driven development to produce a web application that helps automate the README creation of GitHub repository file structures.",
          "Consequently, I worked closely with the GitHub REST API to pull and recursively build markdown tree structures whilst building a scalable and minimalistic UI design with a robust architecture.",
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
      },
    ],
    images: [
      { src: autoreadmedocs01, alt: "Auto README Docs front page" },
      { src: autoreadmedocs02, alt: "Auto README Docs badges" },
      { src: autoreadmedocs03, alt: "Auto README Docs markdown tree" },
      {
        src: autoreadmedocs04,
        alt: "Auto README Docs markdown tree continued",
      },
    ],
  },
  {
    slug: "benchmarkedstudios",
    title: "benchMarked Studios",
    role: "Full-stack Developer",
    period: "May - Oct 2019",
    thumbnail: thumbBenchMarkedStudios,
    tagline:
      "A consulting agency that looks to solve problems with robust, tested, specifically engineered software",
    isRecent: false,
    description: [
      "A consulting agency that looks to solve problems with robust, tested, specifically engineered software.",
    ],
    companyMeta: [],
    subProjects: [
      {
        title: "Sports Clips",
        paragraphs: [
          "As the largest contract given during my stint at benchMarked Studios, the team and I were charged with the task of creating an MVP for a mobile app that would allow customers to book appointments, redeem coupons, and check queue status for haircuts.",
          "Although I was involved in the development of other aspects of the application, I was primarily in charge of the coupon redemption procedure. This entailed developing a coupon redemption page, a keypad, and a user profile page where coupon redemptions could be saved.",
          "In addition, since the application was originally created as a web app, it was required to be converted into an iOS and Android application, which was processed with the help of Ionic's capacitor, led by me.",
        ],
        meta: [
          {
            label: "Website",
            value: "https://sportclips.ca/",
            href: "https://sportclips.ca/",
          },
          { label: "Platform", value: "iOS, Android" },
          { label: "Stack", value: "React, Gatsby, Ionic" },
        ],
      },
      {
        title: "PayoutPrime (not in service)",
        paragraphs: [
          "With the goal of providing accessible financing for Amazon sellers, I assisted in the development of a Shopify website for PayoutPrime, assisting them in advertising their services and showcasing their products in a more streamlined manner; the Shopify website was able to become another advantageous source of income with scalability and reach.",
        ],
        meta: [
          {
            label: "Website",
            value: "http://www.payoutprime.com/",
            href: "http://www.payoutprime.com/",
          },
          { label: "Platform", value: "Web" },
          { label: "Stack", value: "React, Gatsby, Shopify" },
        ],
      },
      {
        title: "Company Website (not in service)",
        paragraphs: [
          "To showcase the services that benchMarked Studios provides, I helped in building various components and pages for the company's website. This included user profiles, testimonials, and even a scheduler that allowed potential clients to book time to speak about their needs and our use case on their project.",
        ],
        meta: [
          {
            label: "Website",
            value: "https://benchmarked.studio/",
            href: "https://benchmarked.studio/",
          },
          { label: "Platform", value: "Web" },
          { label: "Stack", value: "React, Gatsby" },
        ],
      },
    ],
    images: [],
  },
];
