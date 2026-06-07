import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import SingleColumn from "@/components/layouts/single-column";
import Paragraph from "@/components/paragraph";
import { Meta, Title } from "@/components/work";

export const metadata: Metadata = { title: "benchMarked Studios" };

export default function BenchMarkedStudios() {
  return (
    <SingleColumn>
      <div className="max-w-2xl w-full px-4 mx-auto">
        <Title type="work">
          benchMarked Studios (Full-stack Developer){" "}
          <span className="inline-block bg-accent text-white text-xs font-medium px-2 py-0.5 rounded ml-1">May - Oct 2019</span>
        </Title>
        <Paragraph>A consulting agency that looks to solve problems with robust, tested, specifically engineered software.</Paragraph>
        <p className="text-accent mt-4">Sports Clips</p>
        <Paragraph>As the largest contract given during my stint at benchMarked Studios, the team and I were charged with the task of creating an MVP for a mobile app that would allow customers to book appointments, redeem coupons, and check queue status for haircuts.</Paragraph>
        <Paragraph>Although I was involved in the development of other aspects of the application, I was primarily in charge of the coupon redemption procedure. This entailed developing a coupon redemption page, a keypad, and a user profile page where coupon redemptions could be saved.</Paragraph>
        <Paragraph>In addition, since the application was originally created as a web app, it was required to be converted into an iOS and Android application, which was processed with the help of Ionic&apos;s capacitor, led by me.</Paragraph>
        <ul className="ml-4 my-4 space-y-2">
          <li>
            <Meta>Website</Meta>
            <a className="red-link" href="https://sportclips.ca/" target="_blank" rel="noopener noreferrer">
              https://sportclips.ca/ <ExternalLink size={12} className="inline" />
            </a>
          </li>
          <li><Meta>Platform</Meta><span>iOS, Android</span></li>
          <li><Meta>Stack</Meta><span>React, Gatsby, Ionic</span></li>
        </ul>
        <p className="text-accent">PayoutPrime (not in service)</p>
        <Paragraph>With the goal of providing accessible financing for Amazon sellers, I assisted in the development of a Shopify website for PayoutPrime, assisting them in advertising their services and showcasing their products in a more streamlined manner; the Shopify website was able to become another advantageous source of income with scalability and reach.</Paragraph>
        <ul className="ml-4 my-4 space-y-2">
          <li>
            <Meta>Website</Meta>
            <a className="red-link" href="http://www.payoutprime.com/" target="_blank" rel="noopener noreferrer">
              http://www.payoutprime.com/ <ExternalLink size={12} className="inline" />
            </a>
          </li>
          <li><Meta>Platform</Meta><span>Web</span></li>
          <li><Meta>Stack</Meta><span>React, Gatsby, Shopify</span></li>
        </ul>
        <p className="text-accent">Company Website (not in service)</p>
        <Paragraph>To showcase the services that benchMarked Studios provides, I helped in building various components and pages for the company&apos;s website. This included user profiles, testimonials, and even a scheduler that allowed potential clients to book time to speak about their needs and our use case on their project.</Paragraph>
        <ul className="ml-4 my-4 space-y-2">
          <li>
            <Meta>Website</Meta>
            <a className="red-link" href="https://benchmarked.studio/" target="_blank" rel="noopener noreferrer">
              https://benchmarked.studio/ <ExternalLink size={12} className="inline" />
            </a>
          </li>
          <li><Meta>Platform</Meta><span>Web</span></li>
          <li><Meta>Stack</Meta><span>React, Gatsby</span></li>
        </ul>
      </div>
    </SingleColumn>
  );
}
