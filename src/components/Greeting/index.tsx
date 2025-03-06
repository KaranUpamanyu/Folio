"use client";

import React from "react";
import styled from "styled-components";
import GridItem from "@/components/GridItem";

const Link = styled.a`
  cursor: alias;
  &:hover {
    text-underline-offset: 4px;
    text-decoration: underline wavy var(--color-emerald-500);
  }
`;

function Highlight({ children }: { children: React.ReactNode }) {
  return <span className="text-neutral-900">{children}</span>;
}

function Greeting() {
  return (
    <GridItem className="row-span-2 sm:col-span-2 lg:aspect-square">
      <div className="h-full w-full">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-light text-neutral-400 py-[32px]">
          Hello, I'm <Highlight>Karan</Highlight>! 👋
          <br />
          <br />
          I'm a deeply technical <Highlight>software engineer</Highlight>🧑‍💻 with
          a curiosity to{" "}
          <Highlight>
            <Link>build</Link>
          </Highlight>{" "}
          bleeding-edge systems and address complex problems.
          <br />
          <br />I currently work at{" "}
          <Highlight>
            <Link href="https://www.lyearn.com/" target="blank">
              Lyearn
            </Link>
          </Highlight>{" "}
          as a Product Engineer II, and have previously worked at{" "}
          <Highlight>
            <Link href="https://www.springboard.com/" target="blank">
              Springboard
            </Link>
          </Highlight>
          .
          <br />
          <br />
          In my free time, I enjoy playing the <Highlight>guitar</Highlight> 🎸,
          flying my <Highlight>kite</Highlight> 🪁, and strolling around the{" "}
          <Highlight>beach</Highlight>. 🌊
        </h1>
      </div>
    </GridItem>
  );
}

export default Greeting;
