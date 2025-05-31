"use client";
import BoxContent from "@/components/common/BoxContent";
import FormAction from "@/components/common/FormAction";
import TableCommon from "@/components/common/TableCommon";
import ArrowSquare from "@/components/icons/ArrowSquare";
import Books from "@/components/icons/Books";
import CareRight from "@/components/icons/CareRight";
import ChartLineUp from "@/components/icons/ChartLineUp";
import Clipboard from "@/components/icons/Clipboard";
import File from "@/components/icons/File";
import FileText from "@/components/icons/FileText";
import NotePencil from "@/components/icons/NotePencil";
import Percent from "@/components/icons/Percent";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ColumnDef } from "@tanstack/react-table";
import { useId } from "react";

type Payment = {
  id: string;
  status: "pending" | "processing" | "success" | "failed";
  borrowerName: string;
  loanID: string;
  lender: string;
  interestRate: string;
  process: string;
};

export const payments: Payment[] = [
  {
    id: "1",
    status: "processing",
    borrowerName: "Ms. Hang Nguyen",
    loanID: "#LA00001",
    lender: "AD Mortgage",
    interestRate: "6% (6.168% APR)",
    process: "68",
  },
  {
    id: "2",
    status: "processing",
    borrowerName: "Ms. Hang Nguyen",
    loanID: "#LA00001",
    lender: "AD Mortgage",
    interestRate: "6% (6.168% APR)",
    process: "68",
  },
];

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "index",
    header: "Index",
    cell: ({ row }) => {
      return row.index + 1 > 10 ? row.index + 1 : `0${row.index + 1}`;
    },
  },
  {
    accessorKey: "borrowerName",
    header: ({}) => {
      return (
        <div>
          <p>Borrower Name</p>
          <p>Loan ID</p>
        </div>
      );
    },
    cell: ({ row }) => {
      return (
        <>
          <p className="text-[#111928] font-medium">
            {row.getValue("borrowerName")}
          </p>
          <p className="text-[#637381]">{payments[row.index].loanID}</p>
        </>
      );
    },
  },
  {
    accessorKey: "lender",
    header: "Lender",
    cell: ({ row }) => {
      return (
        <>
          <p className="text-[#111928] font-medium">{row.getValue("lender")}</p>
          <p className="text-[#637381]">{payments[row.index].interestRate}</p>
        </>
      );
    },
  },
  {
    accessorKey: "process",
    header: "Process",
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-2.5">
          <Progress
            className="border-[0.3px] rounded-[2px] border-[#294172] [&>div]:bg-[#294172]"
            value={row.getValue("process")}
          />
          <span className="text-[#294172]">{row.getValue("process")}%</span>
        </div>
      );
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      return (
        <div className="uppercase text-[#2979FF] font-medium text-[12px] p-2.5 rounded-[4px] bg-[#E6F7FF] text-center">
          {row.getValue("status")}
        </div>
      );
    },
  },

  {
    id: "actions",
    header: () => <div className="text-center">Actions</div>,
    cell: () => {
      return (
        <div className="text-center">
          <FormAction icon={<FileText />}></FormAction>
        </div>
      );
    },
  },
];

function GeneralInfo() {
  const id = useId();
  return (
    <div className="w-1/2 p-4">
      <BoxContent
        icon={<Books />}
        classNameParent="mb-4"
        className="px-0 py-2.5"
        title={
          <span className="text-[#767676] text-[16px] font-medium">
            GENERAL INFORMATION
          </span>
        }
      >
        <div className="flex flex-col gap-2 mb-4">
          <div className="grid grid-cols-4 gap-[15px] font-semibold text-[#0C0C0D]">
            <p>First Name</p>
            <p>Last Name</p>
            <p>Experience</p>
            <p>Personal Website</p>
          </div>
          <div className="grid grid-cols-4 gap-[15px] text-[#4A4B57]">
            <p>David</p>
            <p>Nguyen</p>
            <p>5 years</p>
            <p>david.com</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="grid grid-cols-4 gap-[15px] font-semibold text-[#0C0C0D]">
            <p>First Name</p>
            <p>Last Name</p>
            <p>Experience</p>
            <p>Personal Website</p>
          </div>
          <div className="grid grid-cols-4 gap-[15px] text-[#4A4B57]">
            <p>David</p>
            <p>Nguyen</p>
            <p>5 years</p>
            <p>david.com</p>
          </div>
        </div>
      </BoxContent>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem className="mb-4" value="item-1">
          <div className="flex items-center justify-between">
            <AccordionTrigger
              classNameHeader="w-full"
              className="cursor-pointer py-2.5 hover:no-underline [&[data-state=open]>div>svg:last-child]:rotate-90 [&>svg]:hidden"
            >
              <div className="flex items-center gap-2">
                <Percent />
                <p className="text-[#767676] font-medium">
                  COMMISSION STRUCTURES
                </p>
                <CareRight />
              </div>
            </AccordionTrigger>
            <Tooltip>
              <TooltipTrigger>
                <ArrowSquare color="#CFCFCF" />
              </TooltipTrigger>
              <TooltipContent
                side="left"
                className="bg-[#111928] [&>span>svg]:bg-[#111928]"
              >
                <p>You don’t have permission to open this link</p>
              </TooltipContent>
            </Tooltip>
          </div>
          <AccordionContent className="flex flex-col gap-4 text-balance"></AccordionContent>
        </AccordionItem>
        <AccordionItem className="mb-4" value="item-2">
          <div className="flex items-center justify-between">
            <AccordionTrigger
              classNameHeader="w-full"
              className="cursor-pointer py-2.5 hover:no-underline [&[data-state=open]>div>svg:last-child]:rotate-90 [&>svg]:hidden"
            >
              <div className="flex items-center gap-2">
                <Clipboard />
                <p className="text-[#767676] font-medium">
                  RECRUITMENT DOCUMENTS
                </p>
                <CareRight />
              </div>
            </AccordionTrigger>
            <ArrowSquare />
          </div>
          <AccordionContent className="flex flex-col gap-4 text-balance"></AccordionContent>
        </AccordionItem>
        <AccordionItem className="mb-4" value="item-3">
          <div className="flex items-center justify-between">
            <AccordionTrigger
              classNameHeader="w-full"
              className="cursor-pointer py-2.5 hover:no-underline [&[data-state=open]>div>svg:last-child]:rotate-90 [&>svg]:hidden"
            >
              <div className="flex items-center gap-2">
                <File />
                <p className="text-[#767676] font-medium">
                  RELATED CLIENTS & LOAN DOCUMENTS
                </p>
                <CareRight />
              </div>
            </AccordionTrigger>
          </div>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <TableCommon
              isShowColumnVisibility={false}
              columns={columns}
              data={payments}
            />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem className="mb-4" value="item-4">
          <div className="flex items-center justify-between">
            <AccordionTrigger
              classNameHeader="w-full"
              className="cursor-pointer py-2.5 hover:no-underline [&[data-state=open]>div>svg:last-child]:rotate-90 [&>svg]:hidden"
            >
              <div className="flex items-center gap-2">
                <ChartLineUp />
                <p className="text-[#767676] font-medium">PERFORMANCE</p>
                <CareRight />
              </div>
            </AccordionTrigger>
          </div>
          <AccordionContent className="flex flex-col gap-4 text-balance"></AccordionContent>
        </AccordionItem>
        <AccordionItem className="mb-4" value="item-5">
          <div className="flex items-center justify-between">
            <AccordionTrigger
              classNameHeader="w-full"
              className="cursor-pointer py-2.5 hover:no-underline [&[data-state=open]>div>svg:last-child]:rotate-90 [&>svg]:hidden"
            >
              <div className="flex items-center gap-2">
                <NotePencil />
                <p className="text-[#767676] font-medium">TO-DO</p>
                <CareRight />
              </div>
            </AccordionTrigger>
          </div>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <div className="flex items-center gap-4">
              <Checkbox className="cursor-pointer border-[#D9D9D9]" id={id} />
              <Label
                className="cursor-pointer font-medium text-[16px] text-[#111928]"
                htmlFor={id}
              >
                Review Loan Applications
              </Label>
              <ArrowSquare />
            </div>
            <div className="flex items-center gap-4">
              <Checkbox className="cursor-pointer border-[#D9D9D9]" id={id} />
              <Label
                className="cursor-pointer font-medium text-[16px] text-[#111928]"
                htmlFor={id}
              >
                Contact to Borrower
              </Label>
              <ArrowSquare />
            </div>
            <div className="flex items-center gap-4">
              <Checkbox disabled id={id} className="bg-[#F5F4F4]" />
              <Label
                aria-disabled="true"
                className="text-[#D9D9D9] font-medium text-[16px]"
                htmlFor={id}
              >
                Click to add new todo
              </Label>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default GeneralInfo;
