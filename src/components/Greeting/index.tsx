"use client";

import React from "react";
import styled from "styled-components";
import GridItem from "@/components/GridItem";
import MotionDiv from "@/components/Motion";

const Link = styled.a`
  text-underline-offset: 4px;
  text-decoration: underline dotted var(--color-emerald-500);

  &:hover {
    text-decoration: underline wavy var(--color-emerald-500);
  }
`;

function Highlight({ children }: { children: React.ReactNode }) {
  return <span className="text-neutral-900">{children}</span>;
}

function Greeting() {
  return (
    <GridItem className="row-span-2 sm:col-span-2 lg:aspect-square">
      <div className="h-full w-full pe-6">
        <MotionDiv>
          <h1 className="text-2xl sm:text-2xl lg:text-3xl font-light text-neutral-400 py-[32px]">
            Hello, I'm <Highlight>Karan</Highlight>! 👋
            <br />
            <br />
            I'm a deeply technical <Highlight>software engineer</Highlight>🧑‍💻
            with a curiosity to solve complex problems and build super cool
            products.
            <br />
            <br />I currently lead the <Highlight>frontend</Highlight> team at{" "}
            <Link
              href="https://www.lyearn.com/"
              target="blank"
              className="cursor-alias text-neutral-900 dotted-link"
            >
              Lyearn
            </Link>
            , and have previously worked at{" "}
            <Link
              href="https://www.springboard.com/"
              target="blank"
              className="cursor-alias text-neutral-900 dotted-link"
            >
              Springboard
            </Link>
            .
            <br />
            <br />
            Outside of work, I enjoy playing the <Highlight>
              guitar
            </Highlight>{" "}
            🎸, flying <Highlight>kites</Highlight> 🪁, watching{" "}
            <Highlight>YouTube</Highlight> 📹 and reading{" "}
            <Highlight>comics</Highlight> 🗯️.
            <br />
            <br />
            I'm originally from <Highlight>Bangalore</Highlight>, but now live
            in <Highlight>Kochi, India</Highlight> with my family.
          </h1>
        </MotionDiv>
      </div>
    </GridItem>
  );
}

export default Greeting;
