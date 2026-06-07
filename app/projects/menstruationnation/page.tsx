import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import SingleColumn from "@/components/layouts/single-column";
import Paragraph from "@/components/paragraph";
import { Meta, Title, WorkImage } from "@/components/work";

export const metadata: Metadata = { title: "Menstruation Nation" };

export default function MenstruationNation() {
  return (
    <SingleColumn>
      <div className="max-w-2xl w-full px-4 mx-auto">
        <Title type="projects">
          Developer <span className="inline-block bg-accent text-white text-xs font-medium px-2 py-0.5 rounded ml-1">Oct 2022 - Jul 2023</span>
        </Title>
        <Paragraph>A free period tracker designed by youth for youth.</Paragraph>
        <ul className="ml-4 my-4 space-y-2">
          <li>
            <Meta>Website</Meta>
            <a className="red-link" href="https://play.google.com/store/apps/details?id=com.tpp.theperiodpurse" target="_blank" rel="noopener noreferrer">
              https://play.google.com/store/apps/details?id=com.tpp.theperiodpurse <ExternalLink size={12} className="inline" />
            </a>
          </li>
          <li>
            <Meta>GitHub</Meta>
            <a className="red-link" href="https://github.com/uoftblueprint/the-period-purse-2023" target="_blank" rel="noopener noreferrer">
              https://github.com/uoftblueprint/the-period-purse-2023 <ExternalLink size={12} className="inline" />
            </a>
          </li>
          <li><Meta>Platform</Meta><span>Mobile</span></li>
          <li><Meta>Stack</Meta><span>Kotlin, Android Jetpack, Room</span></li>
        </ul>
        <WorkImage src="/images/projects/menstruation_nation/mnation_log.png" alt="Log your period" />
        <WorkImage src="/images/projects/menstruation_nation/mnation_record.png" alt="Record multiple period days at once" />
        <WorkImage src="/images/projects/menstruation_nation/mnation_track.png" alt="Keep track of symptoms" />
        <WorkImage src="/images/projects/menstruation_nation/mnation_cycle.png" alt="Understand your cycle" />
        <WorkImage src="/images/projects/menstruation_nation/mnation_learn.png" alt="Learn more about periods" />
        <WorkImage src="/images/projects/menstruation_nation/mnation_settings.png" alt="Customize your experience" />
      </div>
    </SingleColumn>
  );
}
