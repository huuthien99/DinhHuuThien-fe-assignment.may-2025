import ContainerWrap from "@/components/common/ContainerWrap";
import Link from "next/link";
import React from "react";

function ProjectsPage() {
  return (
    <ContainerWrap>
      <Link href={"/projects/1/123"}>Go to Ticket name</Link>
    </ContainerWrap>
  );
}

export default ProjectsPage;
