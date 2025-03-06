import React from "react";

interface PageHeaderProps {
  title: string;
  type?: string;
  subtitle?: React.ReactNode;
}

function PageHeader({ title, type, subtitle }: PageHeaderProps) {
  return (
    <div className="flex flex-col justify-start gap-6 pt-[32px] pb-[48px] px-[8px] max-w-prose">
      <h1 className="text-5xl">
        {title}

        {type ? (
          <span className="no-wrap inline-flex items-center">
            <span className="inter text-3xl font-semibold text-neutral-400 mt-[10px] mx-2">
              {" · "}
            </span>
            <span className="inter text-3xl text-neutral-400 mt-[10px]">
              {type}
            </span>
          </span>
        ) : null}
      </h1>
      {subtitle ? (
        <div className="text-lg text-neutral-400 max-w-prose">{subtitle}</div>
      ) : null}
    </div>
  );
}

export default PageHeader;
