import ContainerWrap from "@/components/common/ContainerWrap";
import Link from "next/link";
import React from "react";

function EstimatorPage() {
  return (
    <ContainerWrap>
      <Link href={"/estimator/work-packages"}>Go to Work packages page</Link>
    </ContainerWrap>
  );
}

export default EstimatorPage;
