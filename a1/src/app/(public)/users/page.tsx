import React from "react";
import FilterComponent from "./FilterComponent";
import UserTable from "./UserTable";
import GeneralInfo from "./GeneralInfo";

function page() {
  return (
    <div className="flex">
      <FilterComponent />
      <div className="ml-[253px] flex w-[calc(100%-253px)]">
        <UserTable />
        <GeneralInfo />
      </div>
    </div>
  );
}

export default page;
