import Arrow from "@/components/icons/Arrow";
import MenuSmall from "@/components/icons/MenuSmall";
import { Button } from "@/components/ui/button";
import React from "react";

function Footer() {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2 cursor-pointer">
        <MenuSmall />
        <p className="text-primary-app text-[16px]">How to add custom WPs</p>
      </div>
      <Button className="flex gap-2 border border-primary-app rounded-[8px] bg-white hover:text-primary-app hover:bg-white cursor-pointer">
        <span className="text-primary-app">Next</span>
        <Arrow />
      </Button>
    </div>
  );
}

export default Footer;
