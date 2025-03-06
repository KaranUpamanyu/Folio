import React from "react";

interface PageHeaderProps {
  title: string;
  type?: string;
  subtitle?: React.ReactNode;
}

function PageHeader({ title, type, subtitle }: PageHeaderProps) {
  return (
    <div className="flex flex-col justify-start gap-6 pt-[32px] pb-[48px] px-[8px]">
      <div className="flex flex-row items-center justify-start gap-2">
        <h1 className="text-5xl">{title}</h1>
        {type ? (
          <>
            <p className="text-3xl font-semibold text-neutral-400 mt-[10px]">
              {" · "}
            </p>
            <p className="text-3xl text-neutral-400 mt-[10px]">{type}</p>
          </>
        ) : null}
      </div>
      {subtitle ? (
        <div className="text-lg text-neutral-400 max-w-prose">{subtitle}</div>
      ) : null}
    </div>
  );
}

export default PageHeader;
