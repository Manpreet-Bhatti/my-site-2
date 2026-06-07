import type { Metadata } from "next";
import SingleColumn from "@/components/layouts/single-column";
import Section from "@/components/section";
import { DynamicGridItem } from "@/components/grid-item";
import { workEntries } from "@/content/work";

export const metadata: Metadata = { title: "Recent work" };

const recent = workEntries.filter((e) => e.isRecent);
const previous = workEntries.filter((e) => !e.isRecent);

export default function Work() {
  return (
    <SingleColumn>
      <div className="max-w-2xl w-full px-4 mx-auto">
        <p>
          Need a formal review? Check out{" "}
          <a className="red-link" href="https://www.res.manpreetbhatti.com/" target="_blank" rel="noopener noreferrer">
            my resume
          </a>
          !
        </p>
        <h3 className="text-xl font-bold my-4">Recent work</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {recent.map((entry) => (
            <Section key={entry.slug}>
              <DynamicGridItem
                type="work"
                id={entry.slug}
                title={entry.title}
                thumbnail={entry.thumbnail}
              >
                {entry.tagline}
              </DynamicGridItem>
            </Section>
          ))}
        </div>

        <Section delay={0.2}>
          <hr className="my-6 border-[rgba(0,0,0,0.1)] dark:border-[rgba(255,255,255,0.1)]" />
          <h3 className="text-xl font-bold mb-4">Previous work</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {previous.map((entry) => (
              <Section key={entry.slug} delay={0.3}>
                <DynamicGridItem
                  type="work"
                  id={entry.slug}
                  title={entry.title}
                  thumbnail={entry.thumbnail}
                >
                  {entry.tagline}
                </DynamicGridItem>
              </Section>
            ))}
          </div>
        </Section>
      </div>
    </SingleColumn>
  );
}
