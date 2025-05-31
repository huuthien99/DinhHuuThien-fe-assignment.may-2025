// "use client";
import React from "react";
import { Badge } from "../ui/badge";
import Menu from "../icons/Menu";

function BadgeCommon({
  children,
  onClick,
  icon = <Menu />, // Default icon is Menu
  iconPosition = "left",
  className = "",
}: {
  children?: React.ReactNode;
  onClick?: () => void;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
}) {
  return (
    <Badge
      className={`bg-primary-app text-white rounded-[32px] px-4 py-[13px] flex gap-2.5 cursor-pointer ${className}`}
      variant="outline"
      onClick={onClick}
    >
      {iconPosition === "left" && icon}
      {children || "View Summary"}
      {iconPosition === "right" && icon}
    </Badge>
  );
}

export default BadgeCommon;
