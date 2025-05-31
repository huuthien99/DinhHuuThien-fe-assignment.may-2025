"use client";
import {
  Cell,
  Column,
  ColumnDef,
  ExpandedState,
  flexRender,
  getCoreRowModel,
  getExpandedRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  Header,
  HeaderGroup,
  Row,
  SortingState,
  useReactTable,
  VisibilityState,
} from "@tanstack/react-table";
import { AlignVerticalDistributeCenter } from "lucide-react";
import { useState } from "react";
import {
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
} from "../ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import FormAction from "./FormAction";
interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  isShowColumnVisibility: boolean;
}

export function TableCommon<TData, TValue>({
  columns,
  data,
  isShowColumnVisibility,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [rowSelection, setRowSelection] = useState({});
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [expanded, setExpanded] = useState<ExpandedState>({});

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onRowSelectionChange: setRowSelection,
    onColumnVisibilityChange: setColumnVisibility,
    onExpandedChange: setExpanded,
    getExpandedRowModel: getExpandedRowModel(),
    state: {
      sorting,
      rowSelection,
      columnVisibility,
      expanded,
    },
  });

  return (
    <div>
      {isShowColumnVisibility && (
        <div className="flex justify-end mb-2">
          <FormAction
            variant="outline"
            className="ml-auto border-none outline-none"
            text="View"
            icon={<AlignVerticalDistributeCenter />}
          >
            <DropdownMenuContent align="end">
              {table
                .getAllColumns()
                .filter((column: Column<TData, unknown>) => column.getCanHide())
                .map((column: Column<TData, unknown>) => {
                  return (
                    <DropdownMenuCheckboxItem
                      key={column.id}
                      className="capitalize"
                      checked={column.getIsVisible()}
                      onCheckedChange={(value) =>
                        column.toggleVisibility(!!value)
                      }
                    >
                      {column.id}
                    </DropdownMenuCheckboxItem>
                  );
                })}
            </DropdownMenuContent>
          </FormAction>
        </div>
      )}
      <div className="rounded-[3px] border">
        <Table>
          <TableHeader className="h-[52px] text-[#111928] bg-[#D9D9D9]">
            {table.getHeaderGroups().map((headerGroup: HeaderGroup<TData>) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header: Header<TData, unknown>) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row: Row<TData>) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell: Cell<TData, TValue>) => (
                    <TableCell className="text-[#111928]" key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default TableCommon;
