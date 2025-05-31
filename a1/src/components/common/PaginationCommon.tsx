import { JSX, Suspense } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";
import RowPerPageCommon from "./RowPerPageCommon";
import { cn } from "@/lib/utils";

type Props = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  showPreviousNext: boolean;
};

export const generatePaginationLinks = (
  currentPage: number,
  totalPages: number,
  onPageChange: (page: number) => void
) => {
  const pages: JSX.Element[] = [];
  if (totalPages <= 6) {
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <PaginationItem key={i}>
          <PaginationLink
            onClick={() => onPageChange(i)}
            isActive={i === currentPage}
            className={cn(
              "cursor-pointer rounded-[6px] w-[40px] text-[#637381] h-[36px] border border-[#EDEFF1]"
            )}
          >
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }
  } else {
    for (let i = 1; i <= 2; i++) {
      pages.push(
        <PaginationItem key={i}>
          <PaginationLink
            onClick={() => onPageChange(i)}
            isActive={i === currentPage}
            className="cursor-pointer"
          >
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }
    if (2 < currentPage && currentPage < totalPages - 1) {
      pages.push(<PaginationEllipsis key="ellipsis-start" />);
      pages.push(
        <PaginationItem key={currentPage}>
          <PaginationLink
            onClick={() => onPageChange(currentPage)}
            isActive={true}
            className="cursor-pointer"
          >
            {currentPage}
          </PaginationLink>
        </PaginationItem>
      );
    }
    pages.push(<PaginationEllipsis key="ellipsis-end" />);
    for (let i = totalPages - 1; i <= totalPages; i++) {
      pages.push(
        <PaginationItem key={i}>
          <PaginationLink
            onClick={() => onPageChange(i)}
            isActive={i === currentPage}
            className="cursor-pointer"
          >
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }
  }
  return pages;
};

const PaginationCommon = (props: Props) => {
  const { currentPage, totalPages, onPageChange, showPreviousNext } = props;
  return (
    <div className="flex justify-between w-full px-[18px]">
      <Pagination className="justify-start">
        <PaginationContent className="gap-[10px]">
          {showPreviousNext && totalPages ? (
            <PaginationItem>
              <PaginationPrevious
                onClick={() => onPageChange(currentPage - 1)}
                aria-disabled={currentPage <= 1}
                tabIndex={currentPage <= 1 ? -1 : undefined}
                className={cn(
                  currentPage <= 1
                    ? "pointer-events-none opacity-50"
                    : undefined,
                  "border border-[#EDEFF1] rounded-[6px] p-[9px]!"
                )}
              />
            </PaginationItem>
          ) : null}
          {generatePaginationLinks(currentPage, totalPages, onPageChange)}
          {showPreviousNext && totalPages ? (
            <PaginationItem>
              <PaginationNext
                onClick={() => onPageChange(currentPage + 1)}
                aria-disabled={currentPage > totalPages - 1}
                tabIndex={currentPage > totalPages - 1 ? -1 : undefined}
                className={cn(
                  currentPage > totalPages - 1
                    ? "pointer-events-none opacity-50"
                    : undefined,
                  "border border-[#EDEFF1] rounded-[6px] p-[9px]!"
                )}
              />
            </PaginationItem>
          ) : null}
        </PaginationContent>
      </Pagination>
      <Suspense>
        <RowPerPageCommon onChangeRowPerPage={() => {}} />
      </Suspense>
    </div>
  );
};

export default PaginationCommon;
