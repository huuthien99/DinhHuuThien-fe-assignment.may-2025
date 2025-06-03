"use client";

import PaginationCommon from "@/components/common/PaginationCommon";
import TableCommon from "@/components/common/TableCommon";
import { Skeleton } from "@/components/ui/skeleton";
import { useQueryParams } from "@/hooks/useQueryParams";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

type Product = {
  id: number;
  title: string;
  price: number;
  brand: string;
  stock: number;
};

export default function ProductTablePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const searchParams = useSearchParams();
  const limit = parseInt(searchParams.get("pageSize") || "5");
  const page = parseInt(searchParams.get("page") || "1");

  const [total, setTotal] = useState(0);

  const columns: ColumnDef<Product>[] = [
    {
      accessorKey: "title",
      header: "Title",
    },
    {
      accessorKey: "brand",
      header: "Brand",
    },
    {
      accessorKey: "price",
      header: ({ column }) => {
        const isSorted = column.getIsSorted();
        let nextOrder: "asc" | "desc" = "asc";
        if (isSorted === "asc") nextOrder = "desc";
        else if (isSorted === "desc") nextOrder = "asc";

        return (
          <p
            className="p-0 flex gap-1 cursor-pointer"
            onClick={() => {
              queryParams({ sort: "price", order: nextOrder });
            }}
          >
            Price
            {!isSorted && <ArrowUpDown className="ml-2 h-4 w-4" />}
            {isSorted === "asc" && <span>▲</span>}
            {isSorted === "desc" && <span>▼</span>}
          </p>
        );
      },
      cell: ({ row }) => {
        const price = row.getValue("price") as number;
        return <div className="font-medium">${price}</div>;
      },
    },
    {
      accessorKey: "stock",
      header: ({ column }) => {
        const isSorted = column.getIsSorted();
        let nextOrder: "asc" | "desc" = "asc";
        if (isSorted === "asc") nextOrder = "desc";
        else if (isSorted === "desc") nextOrder = "asc";

        return (
          <p
            className="p-0 flex gap-1 cursor-pointer"
            onClick={() => {
              queryParams({ sort: "stock", order: nextOrder });
            }}
          >
            Price
            {!isSorted && <ArrowUpDown className="ml-2 h-4 w-4" />}
            {isSorted === "asc" && <span>▲</span>}
            {isSorted === "desc" && <span>▼</span>}
          </p>
        );
      },
    },
  ];

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch(
        `https://dummyjson.com/products?limit=${limit}&skip=${
          (page - 1) * limit
        }`
      );
      const data = await res.json();
      setProducts(data.products);
      setTotal(data.total);
    };
    fetchProducts();
  }, [page, limit]);

  const queryParams = useQueryParams();
  const onChangePage = (page: number) => {
    queryParams({ page: page });
  };

  return (
    <div className="container mx-auto py-10">
      <Suspense fallback={<Skeleton />}>
        <TableCommon columns={columns} data={products} />
      </Suspense>
      <div className="flex items-center justify-end space-x-2 py-4">
        <Suspense fallback={<Skeleton />}>
          <PaginationCommon
            currentPage={page}
            totalPages={Math.ceil(total / limit)}
            onPageChange={onChangePage}
            showPreviousNext
          />
        </Suspense>
      </div>
    </div>
  );
}
