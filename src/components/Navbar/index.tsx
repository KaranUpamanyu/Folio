"use client";

import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%) translateY(80px);
  z-index: 10;
  isolation: isolate;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  padding-inline: 8px;
  height: 58px;
  width: auto;
`;

function Navbar() {
  return <Nav></Nav>;
}

export default Navbar;
