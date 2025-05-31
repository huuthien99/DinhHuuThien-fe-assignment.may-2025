import React from "react";
import TicketDetailContainer from "./TicketDetailContainer";
import BoxContent from "@/components/common/BoxContent";
import Ebook from "@/components/icons/Ebook";
import Circle from "@/components/icons/Circle";
import Content from "@/components/common/Content";

import { cn } from "@/lib/utils";
import Clock from "@/components/icons/Clock";
import TextAreaSubmit from "./TextAreaSubmit";
import PropertiesComponent from "./PropertiesComponent";

type TimelineItem = {
  type: "green" | "blue";
  name: string;
  action: string;
  timestamp: string;
};

const timeline: TimelineItem[] = [
  {
    type: "green",
    name: "RFX David Nguyen",
    action: "Submitted to underwriting",
    timestamp: "2025-04-04 13:00:38",
  },
  {
    type: "blue",
    name: "ABC Lisa Rose",
    action: "approval",
    timestamp: "2025-04-04 11:10:38",
  },
  {
    type: "green",
    name: "RFX David Nguyen",
    action: "Submitted to underwriting",
    timestamp: "2025-04-04 08:00:00",
  },
  {
    type: "blue",
    name: "ABC Lisa Rose",
    action: "create an issue",
    timestamp: "2025-04-03 17:10:38",
  },
];

const Timeline = () => {
  return (
    <div className="space-y-6">
      {timeline.map((item, index) => (
        <div key={index} className={cn("relative")}>
          <span
            className={cn(
              "absolute  top-0 left-0 size-[22px] rounded-full",
              item.type === "green" ? "bg-green-500" : "bg-blue-800"
            )}
          />
          {index !== timeline.length - 1 && (
            <span className="absolute left-[10px] -bottom-[23px] border-l h-full border-[#6F6F6F]" />
          )}

          <div className="flex gap-2 items-center text-[#6F6F6F] ml-10">
            <p className="text-sm font-medium">
              <span className="font-semibold">{item.name}</span> {item.action}
            </p>
            <div className="flex items-center gap-2">
              <Clock />
              <span>{item.timestamp}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

function TicketDetailPage() {
  return (
    <TicketDetailContainer>
      <div className="flex">
        <div className="pr-[14px] w-[calc(100%-275px)]">
          <BoxContent
            icon={<Ebook />}
            classNameParent="mb-[43px]"
            title="Description"
          >
            <Content icon={<Circle />}>
              <p className="text-secondary-app leading-[22px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </Content>
            <Content icon={<Circle />}>
              <p className="text-secondary-app leading-[22px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </Content>
            <Content icon="+" className="[&>span:first-child]:text-primary-app">
              <p className="text-primary-app cursor-pointer">Add sub-tickets</p>
            </Content>
          </BoxContent>
          <BoxContent icon={<Ebook />} className="mb-[43px]" title="Activity">
            <Timeline />
            <TextAreaSubmit />
          </BoxContent>
        </div>
        <PropertiesComponent />
      </div>
    </TicketDetailContainer>
  );
}

export default TicketDetailPage;
