import React from "react";
import { DropdownMenu, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { MoreHorizontal } from "lucide-react";

type Props = {
  children?: React.ReactNode;
  icon?: React.ReactNode;
  text?: string;
  variant?:
    | "link"
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | null
    | undefined;
  className?: string;
};

const FormAction = (props: Props) => {
  const { children, icon, text, variant = "ghost", className } = props;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={variant} className={className}>
          {icon ? icon : <MoreHorizontal className="h-4 w-4" />}
          {text && text}
        </Button>
      </DropdownMenuTrigger>
      {children}
    </DropdownMenu>
  );
};

export default FormAction;
