"use client";
import PaginationCommon from "@/components/common/PaginationCommon";
import TableCommon from "@/components/common/TableCommon";
import ArrowClockWise from "@/components/icons/ArrowClockWise";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Checkbox } from "@/components/ui/checkbox";
import { ColumnDef } from "@tanstack/react-table";

type User = {
  id: string;
  status: string;
  userName: string;
  userId: string;
  phone: string;
  email: string;
  type: string;
  experience: string;
};

export const users: User[] = [
  {
    id: "1",
    status: "ACTIVE",
    userName: "Ms. Hang Nguyen",
    userId: "#LA00001",
    phone: "(322) 243-3452",
    email: "david.nguyen@gmail.com",
    type: "Loan Officer",
    experience: "5 years",
  },
  {
    id: "2",
    status: "ACTIVE",
    userName: "Ms. Hang Nguyen",
    userId: "#LA00001",
    phone: "(322) 243-3452",
    email: "david.nguyen@gmail.com",
    type: "Loan Officer",
    experience: "5 years",
  },
];

export const columns: ColumnDef<User>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        className="bg-white"
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "userName",
    header: ({}) => {
      return (
        <>
          <p>User Name</p>
          <p>User ID</p>
        </>
      );
    },
    cell: ({ row }) => {
      return (
        <div className="flex gap-2">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-[#111928] font-medium">
              {row.getValue("userName")}
            </p>
            <p className="text-[#111928]">{users[row.index].userId}</p>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "phone",
    header: "Contact Info",
    cell: ({ row }) => {
      return (
        <>
          <p className="text-[#111928] font-medium">{row.getValue("phone")}</p>
          <p className="text-[#637381]">{users[row.index].email}</p>
        </>
      );
    },
  },
  {
    accessorKey: "type",
    header: "Type",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      return (
        <div className="uppercase text-[#43A047] font-medium text-[12px] p-2.5 rounded-[4px] bg-[#F6FFED] text-center">
          {row.getValue("status")}
        </div>
      );
    },
  },
];

function UserTable() {
  return (
    <div className="border-r border-[#D9D9D9] w-1/2  min-h-[calc(100vh-60px)] flex flex-col">
      <div className="flex items-center py-[18px] pl-4 gap-2.5">
        <p className="text-[#294172] font-bold text-[20px] ">43 USERS</p>
        <ArrowClockWise />
      </div>
      <div className="flex-1 overflow-auto">
        <TableCommon
          isShowColumnVisibility={false}
          columns={columns}
          data={users}
        />
      </div>
      <div className="border-t border-[#D9D9D9] h-[62px] flex items-center w-full">
        <PaginationCommon
          currentPage={1}
          totalPages={10}
          onPageChange={(page) => console.log(page)}
          showPreviousNext
        />
      </div>
    </div>
  );
}

export default UserTable;
