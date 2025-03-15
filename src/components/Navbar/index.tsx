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
    <nav className="isolate flex flex-row items-center justify-between py-[16px]">
      <Name href="/" className="fraunces text-lg md:text-2xl">
        Karan Upamanyu
      </Name>

      <div className="flex flex-row space-x-4">
        <NavLink
          className="text-sm cursor-alias text-neutral-400 hover:text-neutral-800"
          href="https://linkedin.com/in/kvup/"
          target="_blank"
        >
          LinkedIn
        </NavLink>
        <NavLink
          className="text-sm cursor-alias text-neutral-400 hover:text-neutral-800 hidden md:block"
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
    </nav>
  );
}

export default Navbar;
