import ContainerWrap from "@/components/common/ContainerWrap";
import Category from "./Category";
import WorkPackage from "./WorkPackage";
import Footer from "./Footer";
import { Suspense } from "react";

function workPackagePage() {
  return (
    <ContainerWrap isShowBadge className="">
      <div className="flex flex-col gap-8.5 ml-[43px] mt-4 mr-[133px]">
        <h6 className="text-[#343434] text-xl font-medium">
          Work Packages (WP)
        </h6>
        <div className="flex gap-6">
          <Suspense>
            <div className="w-50">
              <Category />
            </div>
          </Suspense>
          <div className="w-full">
            <WorkPackage />
          </div>
        </div>
        <Footer />
      </div>
    </ContainerWrap>
  );
}

export default workPackagePage;
