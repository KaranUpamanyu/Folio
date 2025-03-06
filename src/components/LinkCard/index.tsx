"use client";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

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
}: {
  type: string;
  title: string;
  image: {
    src: string;
    alt: string;
  };
  to?: string;
}) {
  console.debug({ type, title, image });
  return (
    <LinkCardContainer
      className="h-full w-full rounded-md bg-neutral-50 hover:bg-neutral-100 hover:cursor-pointer flex flex-col items-start gap-2 group overflow-hidden"
      href={to}
    >
      <div className="flex flex-row items-center p-[16px] pb-[12px] w-full gap-1">
        <h2 className="text-lg text-neutral-400 group-hover:text-neutral-600 underlined-section">
          {title}
        </h2>
        <p className="font-semibold text-neutral-400 mt-[2px]">{" · "}</p>
        <p className="text-sm text-neutral-400 mt-[2px]">{type}</p>
      </div>

      <Image
        src={image.src}
        alt={image.alt}
        width={1000}
        height={400}
        className="md:px-[64px] px-[32px] group-hover:scale-103 group-hover:opacity-80 transition-transform"
      />
    </LinkCardContainer>
  );
}

export default LinkCard;
