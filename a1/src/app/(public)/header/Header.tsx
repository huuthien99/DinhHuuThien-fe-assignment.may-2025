import ArrowDownBig from "@/components/icons/ArrowDownBig";
import Home from "@/components/icons/Home";
import Notification from "@/components/icons/Notification";
import Setting from "@/components/icons/Setting";
import User from "@/components/icons/User";
import { Popover, PopoverTrigger } from "@/components/ui/popover";

function Header() {
  return (
    <div className="sticky z-50 top-0 bg-[#294172] h-15 py-2 pl-[59px] pr-[50px] flex items-center justify-between">
      <div className="flex items-center">
        <p className="text-[16px] text-[#00B25C]">COMPANY LOGO XXX</p>
        <div className="flex gap-5 items-center ml-19">
          <Home />
          <div
            style={{
              boxShadow: "0px 1px 4px 0px #FFFFFFB2",
            }}
            className="flex flex-col gap-1 bg-[#DAE6EF] rounded-[5px] px-5 py-1"
          >
            <p className="text-[12px]">Module</p>
            <p className="uppercase font-bold">USER management</p>
          </div>
        </div>
      </div>
      <div className="w flex items-center gap-4">
        <span className="relative">
          <Notification />
          <span className="absolute -top-[4px] -right-[6px] size-[17px] rounded-full bg-[#E10E0E] flex justify-center items-center text-white text-[10px] font-medium">
            1
          </span>
        </span>

        <Setting />
        <div className="flex items-center gap-5 text-white">
          <User />
          <Popover>
            <PopoverTrigger className="flex items-center gap-5 cursor-pointer">
              <div className="flex flex-col items-start gap-1">
                <p className="font-bold">Mr. David Nguyen</p>
                <span className="text-[12px]">Home Company</span>
              </div>
              <ArrowDownBig />
            </PopoverTrigger>
            {/* <PopoverContent>Place content for the popover here.</PopoverContent> */}
          </Popover>
        </div>
      </div>
    </div>
  );
}

export default Header;
