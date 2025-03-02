"use client";

import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  isolation: isolate;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px 0;
  width: auto;
`;

const NavLink = styled.a`
  font-size: 0.875rem;
  color: var(--color-link);
  text-underline-offset: 4px;
  cursor: alias;
  transition: color 150ms;

  &:hover {
    color: var(--color-link-active);
    text-decoration: underline wavy var(--color-emerald-500);
  }
`;

const Name = styled.a`
  font-family: var(--font-fraunces);
  font-size: 1.5rem;
  text-underline-offset: 4px;

  &:hover {
    color: #171717;
    text-decoration: underline wavy var(--color-emerald-500);
  }
`;

function Navbar() {
  return (
    <Nav className="justify-center md:justify-between">
      <Name href="/">Karan Upamanyu</Name>

      <div className="flex flex-row space-x-4 hidden md:block">
        <NavLink href="https://github.com/KaranUpamanyu" target="_blank">
          GitHub
        </NavLink>
        <NavLink href="/resume.pdf" target="_blank">
          Resume
        </NavLink>
      </div>
    </Nav>
  );
}

export default Navbar;
