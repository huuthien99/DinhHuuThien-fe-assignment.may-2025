"use client";
import { cn } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const categories = [
  {
    name: "All Work Packages",
    key: "all",
  },
  {
    name: "Architectural WPs",
    key: "architectural",
  },
  {
    name: "Development WPs",
    key: "development",
  },
  {
    name: "Operation WPs",
    key: "operation",
  },
  {
    name: "Basic",
    key: "basic",
  },
  {
    name: "Comprehensive",
    key: "comprehensive",
  },
  {
    name: "Advanced",
    key: "advanced",
  },
];

function Category() {
  const [tab, setTab] = React.useState("default");
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleCategoryClick = (key: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("category", key);
    router.replace(`?${params.toString()}`);
  };

  const handleTabChange = (tab: string) => {
    setTab(tab);
  };

  const currentCategory = searchParams.get("category") || "all";

  return (
    <div>
      <div className="flex border-[1px] gap-1 justify-between items-center h-[32px] border-[#D3D3D3] p-1 rounded-[4px] cursor-pointer mb-[23px]">
        <p
          onClick={() => handleTabChange("default")}
          className={cn(
            "text-secondary-app w-[87px] text-center transition-all duration-500 ease-in-out",
            tab === "default"
              ? "bg-[#E2F5F9] text-primary-app rounded-[4px]"
              : ""
          )}
        >
          RFX WPs
        </p>
        <p
          onClick={() => handleTabChange("custom")}
          className={cn(
            "text-secondary-app w-[87px] text-center transition-all duration-500 ease-in-out",
            tab === "custom"
              ? "bg-[#E2F5F9] text-primary-app rounded-[4px]"
              : ""
          )}
        >
          Custom WPs
        </p>
      </div>

      <h6 className="text-[18px] font-medium text-[#343434] mb-[10px]">
        Categories
      </h6>
      <div className="flex flex-col gap-2">
        {categories.map((category) => (
          <div
            key={category.key}
            className={cn(
              "border-b-[1px] border-[#AFAFAF] cursor-pointer pb-1",
              currentCategory === category.key
                ? "text-primary-app"
                : "text-secondary-app"
            )}
            onClick={() => handleCategoryClick(category.key)}
          >
            {category.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
