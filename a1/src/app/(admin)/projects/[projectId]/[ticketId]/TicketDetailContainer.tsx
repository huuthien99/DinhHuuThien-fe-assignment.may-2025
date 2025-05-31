"use client";
import ContainerWrap from "@/components/common/ContainerWrap";
import React from "react";

function TicketDetailContainer({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  const click = () => {
    alert("TicketDetailPage");
  };
  return (
    <ContainerWrap className={className} clickBadge={click}>
      {children}
    </ContainerWrap>
  );
}

export default TicketDetailContainer;
