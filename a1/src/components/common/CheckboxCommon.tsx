"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { useFormContext } from "react-hook-form";
import { Checkbox } from "../ui/checkbox";
import { FormControl, FormField, FormItem } from "../ui/form";

type CheckboxProps = {
  name: string;
  className?: string;
  disabled?: boolean;
  id?: string;
};

function CheckboxCommon(props: CheckboxProps) {
  const { name, className = "", disabled = false, id, ...rest } = props;
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <Checkbox
              {...field}
              {...rest}
              id={id}
              className={cn(
                disabled
                  ? "bg-[#F5F4F4] cursor-not-allowed opacity-60"
                  : "cursor-pointer",
                className
              )}
              disabled={disabled}
              checked={Boolean(field.value)}
              onCheckedChange={(checked) => {
                field.onChange(checked);
              }}
            />
          </FormControl>
        </FormItem>
      )}
    />
  );
}

export default CheckboxCommon;
