import React from "react";
import PerformanceOptimizationCard from "@/components/Cards/Projects/PerformanceOptimization";
import PageHeader from "@/components/PageHeader";
import PaymentsCard from "@/components/Cards/Projects/Payments";

const SpringboardContent = (
  <>
    <p>
      <span className="text-neutral-700">
        <a
          className="styled-link text-neutral-700 cursor-alias"
          href="https://www.springboard.com/"
          target="_blank"
        >
          Springboard
        </a>{" "}
        is an online learning platform
      </span>{" "}
      that helps people—often from non-technical backgrounds—transition into
      higher-paying tech jobs with a job guarantee. Their courses are long-term,
      typically lasting{" "}
      <span className="text-neutral-700">between six months to a year</span>,
      and cover fields like{" "}
      <span className="text-neutral-700">
        data analytics, data science, machine learning, cybersecurity, software
        development, and UI/UX design
      </span>
      .
    </p>
    <br />
    <p>
      During my final year of college, after{" "}
      <span className="text-neutral-700">
        securing strong job offers through campus placements
      </span>
      , I decided to help others do the same. I conducted{" "}
      <a
        className="styled-link text-neutral-700 cursor-alias"
        href="https://karanupamanyu.github.io/placementcourse/"
        target="_blank"
      >
        placement training programs
      </a>{" "}
      for <span className="text-neutral-700">over 50 students</span> across
      Bengaluru.
    </p>
    <br />
    <p>
      Later, I reconnected with a senior from college—someone who had taught me
      how to host websites when I was building a news/blogging site during my
      first year of college. He had recently joined Springboard and spoke highly
      of the company, which convinced me to apply. They were impressed with my
      experience helping students get technical jobs, and to me,{" "}
      <span className="text-neutral-700">
        Springboard felt like what I had hoped to build with my own placement
        courses, but on a much bigger scale
      </span>
      . After graduating, I joined the company.
    </p>
    <br />
    <p>
      I worked at Springboard for{" "}
      <span className="text-neutral-700">two years</span>, from
      <span className="text-neutral-700"> August 2022 to July 2024</span>.
    </p>
  </>
);

function SpringboardPage() {
  return (
    <>
      <PageHeader
        title="Springboard"
        type="Work"
        subtitle={SpringboardContent}
      />
      <div className="grid grid-cols-1 sm:grid-flow-row-dense sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1">
        <PerformanceOptimizationCard />
        <PaymentsCard />
      </div>
    </>
  );
}

export default SpringboardPage;
