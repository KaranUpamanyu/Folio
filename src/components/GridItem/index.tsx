import React from "react";
import cn from "classnames";

function GridItem({
  className,
  children,
}: {
  className: string;
  children: React.ReactNode;
}) {
  return <div className={cn(className, "px-[4px] pb-[8px]")}>{children}</div>;
}

export default GridItem;
