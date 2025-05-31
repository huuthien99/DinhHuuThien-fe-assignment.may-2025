import BoxContent from "@/components/common/BoxContent";
import LineContent from "@/components/common/LineContent";
import ArrowRight from "@/components/icons/ArrowRight";
import React from "react";

function PropertiesComponent() {
  return (
    <BoxContent
      classNameParent="border-l w-[275px] h-screen"
      title="Properties"
      className="pl-2 justify-between"
      iconRight={<ArrowRight />}
    >
      <div className="flex flex-col gap-4 px-4">
        <LineContent title="Status">
          <span className="text-[#007AFF]">In-Progress</span>
        </LineContent>
        <LineContent title="Priority">
          <span className="text-[#E10E0E]">Critical</span>
        </LineContent>
        <LineContent title="Assignee">
          <span>Trangntt</span>
        </LineContent>
        <LineContent title="Type">
          <span>Bug</span>
        </LineContent>
        <LineContent title="Stated date">
          <span>2025-04-04</span>
        </LineContent>
        <LineContent title="Target date">
          <span>2025-04-04</span>
        </LineContent>
      </div>
    </BoxContent>
  );
  //  <div className="border-l w-[275px] h-screen">

  // </div>;
}

export default PropertiesComponent;
