import React from "react";
import BreadcrumbCustom from "../breadcrumb";
import BadgeCommon from "../badge";

function ContainerWrap({
  children,
  className,
  isShowBreadcrumbs = true,
  isShowBadge = false,
  clickBadge,
}: {
  children: React.ReactNode;
  className?: string;
  isShowBreadcrumbs?: boolean;
  isShowBadge?: boolean;
  clickBadge?: () => void;
}) {
  return (
    <div className={className}>
      <div className="flex items-center justify-between h-[52px] border-b-[#D3D3D3] border-b-[1px] pr-[19px]">
        {isShowBreadcrumbs && <BreadcrumbCustom />}
        {isShowBadge && <BadgeCommon onClick={clickBadge} />}
      </div>
      {children}
    </div>
  );
}

export default ContainerWrap;
