"use client";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface RowPerPageProps {
  rowPerPage?: number;
  onChangeRowPerPage: (limit: string) => void;
}

const RowPerPageCommon = ({
  rowPerPage = 5,
  onChangeRowPerPage,
}: RowPerPageProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const currentRowPerPage = searchParams.get("pageSize") || rowPerPage;
  const onChange = (limit: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("pageSize", String(limit));
    router.push(`?${params.toString()}`);
    if (onChangeRowPerPage) onChangeRowPerPage(limit);
  };
  return (
    <Select
      onValueChange={onChange}
      defaultValue={currentRowPerPage.toString()}
    >
      <SelectTrigger className="w-[123px] focus-visible:outline-none focus-visible:shadow-none focus-visible:ring-0 rounded-[6px]">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="5">5 items</SelectItem>
        <SelectItem value="10">10 items</SelectItem>
        <SelectItem value="20">20 items</SelectItem>
        <SelectItem value="50">50 items</SelectItem>
      </SelectContent>
    </Select>
  );
};
export default RowPerPageCommon;
