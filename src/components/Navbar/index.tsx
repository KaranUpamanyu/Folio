"use client";

import React from "react";
import styled from "styled-components";

export const NavLink = styled.a`
  text-underline-offset: 4px;
  transition: color 150ms;

  &:hover {
    text-decoration: underline wavy var(--color-emerald-500);
  }
`;

export const Name = styled.a`
  text-underline-offset: 4px;

  &:hover {
    color: #171717;
    text-decoration: underline wavy var(--color-emerald-500);
  }
`;

function Navbar() {
  return (
    <div className="isolate flex flex-row items-center justify-center md:justify-between py-[16px]">
      <Name href="/" className="fraunces text-2xl">
        Karan Upamanyu
      </Name>

      <div className="flex flex-row space-x-4 hidden md:block">
        <NavLink
          className="text-sm cursor-alias text-neutral-400 hover:text-neutral-800"
          href="https://github.com/KaranUpamanyu"
          target="_blank"
        >
          GitHub
        </NavLink>
        <NavLink
          className="text-sm cursor-alias text-neutral-400 hover:text-neutral-800"
          href="/resume.pdf"
          target="_blank"
        >
          Resume
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
