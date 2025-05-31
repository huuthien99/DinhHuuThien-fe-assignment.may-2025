import ArrowRight from "@/components/icons/ArrowRight";
import CardIcon from "@/components/icons/CardIcon";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";

export interface CardProps {
  name: string;
  description: string;
}

function Card({ card, className }: { card?: CardProps; className?: string }) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 border border-[#D3D3D3] py-[12px] px-[11px] rounded-[4px]",
        className
      )}
    >
      <div className="flex justify-between items-center">
        <p className="font-medium text-[18px]">{card?.name}</p>
        <ArrowRight />
      </div>
      <p className="text-secondary-app line-clamp-2">{card?.description}</p>
      <div className="flex gap-[6px]">
        <p className="size-6 bg-[#E2F5F9] border border-[#D3D3D3] flex justify-center items-center">
          <ArrowRight />
        </p>
        <p className="size-6 bg-[#E2F5F9] border border-[#D3D3D3] flex justify-center items-center">
          <ArrowRight />
        </p>
      </div>
      <div className="flex justify-between items-center mt-[12px]">
        <Button
          className="text-primary-app bg-[#F3F4F6] text-[16px] font-medium rounded-[8px] cursor-pointer hover:text-primary-app"
          variant={"outline"}
        >
          View Detail
        </Button>
        <span className="cursor-pointer">
          <CardIcon />
        </span>
      </div>
    </div>
  );
}

export default Card;
