"use client";

import React, { useCallback, useRef } from "react";
import styled from "styled-components";

const FooterNav = styled.footer`
  position: fixed;
  bottom: 80px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  isolation: isolate;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  padding: 8px;
  height: 64px;
  width: auto;

  transition: width ease-in-out 400ms;

  .footer-nav-item {
    height: 48px;
    width: 48px;
    transition: width cubic-bezier(0.25, 1, 0.5, 1) 100ms,
      height cubic-bezier(0.25, 1, 0.5, 1) 100ms;
  }

  .footer-nav-item:hover {
    height: 72px;
    // height: calc(72px + var(--dock-offset-right, 0px));
    width: 72px;
    // width: calc(72px + var(--dock-offset-right, 0px));
  }

  .footer-nav-item:hover + .footer-nav-item {
    height: calc(64px + var(--dock-offset-right, 0px));
    width: calc(64px + var(--dock-offset-right, 0px));
  }
  .footer-nav-item:has(+ .footer-nav-item:hover) {
    height: calc(64px + var(--dock-offset-left, 0px));
    width: calc(64px + var(--dock-offset-left, 0px));
  }

  .footer-nav-item:hover + .footer-nav-item + .footer-nav-item {
    height: calc(56px + var(--dock-offset-right, 0px));
    width: calc(56px + var(--dock-offset-right, 0px));
  }
  .footer-nav-item:has(+ .footer-nav-item + .footer-nav-item:hover) {
    height: calc(56px + var(--dock-offset-left, 0px));
    width: calc(56px + var(--dock-offset-left, 0px));
  }
`;

// takes 3 props - current value, lower and upper bound possible for current value, and the range of the target scale. Outputs the scaled value.
const scaleValue = (
  value: number,
  [from, to]: number[],
  [targetFrom, targetTo]: number[]
) => {
  const scale = (targetTo - targetFrom) / (to - from);
  const scaledValue = targetFrom + (value - from) * scale;
  return scaledValue;
};

function FooterNavItem({
  handleHover,
}: {
  handleHover: (event: React.MouseEvent<HTMLDivElement>) => void;
}) {
  return (
    <div className="footer-nav-item p-[2px]" onMouseMove={handleHover}>
      <div className="bg-emerald-500 rounded-full h-full w-full" />
    </div>
  );
}

function FooterNavbar() {
  const dockRef = useRef<HTMLDivElement>(null);

  const handleHover = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      if (!dockRef.current) return;

      const mousePosition = event.clientX;
      const iconPositionLeft = event.currentTarget.getBoundingClientRect().left;
      const iconWidth = event.currentTarget.getBoundingClientRect().width;

      const cursorDistance = (mousePosition - iconPositionLeft) / iconWidth;
      console.table({ cursorDistance });
      const offsetPixels = scaleValue(cursorDistance, [0, 1], [-8, 8]);

      dockRef.current.style.setProperty(
        "--dock-offset-left",
        `${offsetPixels * -1}px`
      );
      dockRef.current.style.setProperty(
        "--dock-offset-right",
        `${offsetPixels}px`
      );
    },
    [dockRef.current]
  );

  return (
    <FooterNav className="bg-emerald-100 rounded-full" ref={dockRef}>
      <FooterNavItem handleHover={handleHover} />
      <FooterNavItem handleHover={handleHover} />
      <FooterNavItem handleHover={handleHover} />
      <FooterNavItem handleHover={handleHover} />
      <FooterNavItem handleHover={handleHover} />
      <FooterNavItem handleHover={handleHover} />
      <FooterNavItem handleHover={handleHover} />
    </FooterNav>
  );
}

export default FooterNavbar;
