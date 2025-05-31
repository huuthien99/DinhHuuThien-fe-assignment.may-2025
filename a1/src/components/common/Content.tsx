import { cn } from "@/lib/utils";
import React from "react";

function Content({
  children,
  className,
  icon,
}: {
  children?: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}) {
  return (
    <div className={cn("flex items-baseline gap-[11px]", className)}>
      {icon && <span className="icon">{icon}</span>}
      {children}
    </div>
  );
}

export default Content;
