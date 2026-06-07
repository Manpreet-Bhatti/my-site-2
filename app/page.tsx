import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { Linkedin, Github, Mail } from "lucide-react";
import Section from "@/components/section";
import { GridItem } from "@/components/grid-item";
import SingleColumn from "@/components/layouts/single-column";
import SakuraViewer from "@/components/sakura-viewer";

import thumbMenstruationNation from "@/public/images/projects/menstruation_nation/mnation_logo.png";
import thumbGrafGas from "@/public/images/projects/grafgas.jpg";

export default function Home() {
  return (
    <SingleColumn>
      <div className="max-w-2xl w-full px-4 mx-auto">
        <SakuraViewer />
      </div>
      <div className="max-w-2xl w-full px-4 mx-auto">
        <div className="md:flex">
          <div className="grow">
            <h2 className="page-title">Manpreet Bhatti</h2>
            <p className="text-accent">Software Developer @ Dayforce</p>
          </div>
          <div className="shrink-0 mt-4 md:mt-0 md:ml-6 text-center">
            <div className="border-2 border-accent w-25 h-25 inline-block rounded-full overflow-hidden">
              <Image
                src="/images/manpreet-coding.png"
                alt="Profile image"
                width={96}
                height={96}
                priority
              />
            </div>
          </div>
        </div>

        <div className="rounded-lg mb-6 p-3 text-center bg-[#f4f4f4] dark:bg-[rgba(255,255,255,0.12)] backdrop-blur-[10px]">
          I&apos;m a front-end (aspiring full-stack) developer based in{" "}
          <span title="Canada" aria-label="Canada">
            🇨🇦
          </span>
          !
        </div>

        <Section delay={0.1}>
          <h3 className="section-title">👨🏽‍💻 Who I am</h3>
          <p className="text-justify indent-4">
            As a software developer at{" "}
            <a
              className="red-link"
              href="https://www.dayforce.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dayforce
            </a>
            , I play a pivotal role in enhancing and building SWP. Hailing from
            Ontario, I specialize in crafting intuitive and high-performing user
            experiences. I&apos;m always open to exploring new opportunities, so
            feel free to connect!
          </p>
          <div className="text-center my-4">
            <Link
              href="/work"
              className="inline-flex items-center gap-1 px-4 py-2 rounded-md bg-[#8b5a2b] hover:bg-[#7a4f26] text-white transition-colors"
            >
              My experience <ChevronRight size={16} />
            </Link>
          </div>
        </Section>

        <Section delay={0.2}>
          <h3 className="section-title">🤝 Community involvement</h3>
          <p className="text-justify indent-4">
            Giving back to my community is a joy for me; I help develop for my
            former university&apos;s hackathon,{" "}
            <a
              className="red-link"
              href="https://hackthevalley.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hack The Valley
            </a>
            , as well as teach and mentor aspiring developers.
          </p>
        </Section>

        <Section delay={0.3}>
          <h3 className="section-title">🍿 Off-hours</h3>
          <p className="text-justify indent-4">
            When I&apos;m not developing, one of my hobbies is watching movies
            and TV shows. For exploration and critical analysis purposes, I like
            to immerse myself in all types of genres. That being said, action,
            mystery, and sci-fi are the go-to.
          </p>
        </Section>

        <Section delay={0.3}>
          <h3 className="section-title">🕸 On the web</h3>
          <ul className="space-y-1">
            <li>
              <a
                href="https://www.linkedin.com/in/manpreet1bhatti/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-accent hover:bg-btn-hover-light dark:hover:bg-btn-hover-dark transition-colors"
              >
                <Linkedin size={16} /> manpreet1bhatti
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Manpreet-Bhatti"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-accent hover:bg-btn-hover-light dark:hover:bg-btn-hover-dark transition-colors"
              >
                <Github size={16} /> Manpreet-Bhatti
              </a>
            </li>
            <li>
              <a
                href="mailto:manpreet@bhatti.net"
                className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-accent hover:bg-btn-hover-light dark:hover:bg-btn-hover-dark transition-colors"
              >
                <Mail size={16} /> manpreet [at] bhatti.net
              </a>
            </li>
          </ul>
        </Section>

        <Section delay={0.4}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <GridItem
              href="https://play.google.com/store/apps/details?id=com.tpp.theperiodpurse"
              title="Menstruation Nation"
              thumbnail={thumbMenstruationNation}
            >
              A free period tracker designed by youth for youth
            </GridItem>
            <GridItem
              href="https://www.grafgas.com/"
              title="Graf-Gas"
              thumbnail={thumbGrafGas}
            >
              A data analytical dashboard with a focus on fleet driver fuel
              consumption and transportation efficiency
            </GridItem>
          </div>
          <div className="text-center my-4">
            <Link
              href="/projects"
              className="inline-flex items-center gap-1 px-4 py-2 rounded-md bg-[#8b5a2b] hover:bg-[#7a4f26] text-white transition-colors"
            >
              My projects <ChevronRight size={16} />
            </Link>
          </div>
        </Section>
      </div>
    </SingleColumn>
  );
}
