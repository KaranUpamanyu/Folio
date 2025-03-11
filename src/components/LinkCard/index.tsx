"use client";
import Image from "next/image";
import React from "react";
import cn from "classnames";
import styled from "styled-components";
import MotionDiv from "@/components/Motion";

const LinkCardContainer = styled.a`
  .underlined-section {
    text-underline-offset: 4px;
  }

  &:hover {
    .underlined-section {
      text-decoration: underline wavy var(--color-emerald-500);
    }
  }
`;

function LinkCard({
  type,
  title,
  image,
  to,
  smallCard,
}: {
  type: string;
  title: string;
  image: {
    src: string;
    alt: string;
  };
  to?: string;
  smallCard?: boolean;
}) {
  return (
    <MotionDiv>
      <LinkCardContainer
        className="h-full w-full rounded-md bg-neutral-50 hover:bg-neutral-100 hover:cursor-pointer flex flex-col items-start gap-2 group overflow-hidden"
        href={to}
      >
        <div className="flex flex-row items-center p-[16px] pb-[12px] w-full gap-1">
          <h2>
            <span className="text-lg text-neutral-400 group-hover:text-neutral-600">
              {/* add class underlined-section to add green underline */}
              {title}
            </span>
            <span className="no-wrap inline-flex items-center inter">
              <span className="font-semibold text-neutral-400 mt-[2px] mx-[6px]">
                {" · "}
              </span>
              <span className="text-sm text-neutral-400 mt-[2px]">{type}</span>
            </span>
          </h2>
        </div>

        <Image
          src={image.src}
          alt={image.alt}
          width={1000}
          height={400}
          className={cn(
            "group-hover:scale-103 group-hover:opacity-80 transition-transform",
            smallCard ? "px-[27.5px]" : "px-[32px] md:px-[64px]"
          )}
        />
      </LinkCardContainer>
    </MotionDiv>
  );
}

export default React.memo(LinkCard);
