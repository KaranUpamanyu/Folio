import React from "react";
import { Metadata } from "next";
import GraphQLOptimizationCard from "@/components/Cards/Projects/GraphQLOptimization";
import ChatbotCard from "@/components/Cards/Projects/Chatbot";
import PageHeader from "@/components/PageHeader";
import SubscriptionRetryMechanismCard from "@/components/Cards/Projects/RetryMechanism";

export const metadata: Metadata = {
  title: "Karan Upamanyu | Lyearn",
  description: "Karan's experience at Lyearn",
};

const LyearnContent = (
  <>
    <p>
      <span className="text-neutral-700">
        <a
          className="styled-link text-neutral-700 cursor-alias"
          href="https://www.lyearn.com/"
          target="_blank"
        >
          Lyearn
        </a>
      </span>{" "}
      is an{" "}
      <span className="text-neutral-700">employee experience platform</span> and
      a <span className="text-neutral-700">B2B SaaS</span> company.
    </p>
    <p>
      Lyearn’s features are divided into{" "}
      <span className="text-neutral-700">four key verticals</span>:
    </p>
    <ul>
      <li>
        <span className="text-neutral-700">Align</span> – Set up meetings,
        goals, and OKRs.
      </li>
      <li>
        <span className="text-neutral-700">Learn</span> – Create and manage
        courses, articles, quizzes, assignments, and sessions .
      </li>
      <li>
        <span className="text-neutral-700">Perform</span> – Handle performance
        reviews (like Lattice), ticket management (like Jira/Linear), and
        habit/activity tracking .
      </li>
      <li>
        <span className="text-neutral-700">Engage</span> – Facilitate surveys,
        communities (like Slack), 1:1 meetings, praise walls, and feedback
        requests/offers .
      </li>
    </ul>
    <br />
    <p>
      Recently, Lyearn has been expanding into a{" "}
      <span className="text-neutral-700">self-serve B2C platform</span> and
      integrating{" "}
      <span className="text-neutral-700">AI-powered knowledge management</span>
      —both of which I’ve worked on extensively.
    </p>
    <br />
    <p>
      Lyearn has an amazing frontend codebase built and maintained at very high
      standards, and a strong culture of staying{" "}
      <span className="text-neutral-700">technically ahead</span> of the
      competition.
    </p>
    <br />
    <p>
      I joined Lyearn in <span className="text-neutral-700">August 2022</span>{" "}
      and I currently{" "}
      <span className="text-neutral-700">lead the frontend team</span>.
    </p>
  </>
);

function LyearnPage() {
  return (
    <>
      <PageHeader title="Lyearn" type="Work" subtitle={LyearnContent} />
      <div className="grid grid-cols-1 sm:grid-flow-row-dense sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1">
        <SubscriptionRetryMechanismCard />
        <ChatbotCard />
        <GraphQLOptimizationCard />
      </div>
    </>
  );
}

export default React.memo(LyearnPage);
