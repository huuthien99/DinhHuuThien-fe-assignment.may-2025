import React from "react";
import ArrowDown from "../icons/ArrowDown";

function LineContent({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex text-secondary-app gap-6">
      <p className="w-[110px]">{title}:</p>
      <p className="flex items-center gap-2">
        <ArrowDown />
        {children}
      </p>
    </div>
  );
}

export default LineContent;
