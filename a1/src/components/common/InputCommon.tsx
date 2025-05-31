"use client";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { cn } from "@/lib/utils";
import { AutoComplete, Option } from "./Autocomplete";

type InputProps = {
  name: string;
  placeholder: string;
  isShowLabel?: boolean;
  labelName?: string;
  isRequired?: boolean;
  type?: string;
  isInput?: boolean;
  isSelect?: boolean;
  className?: string;
  classNameLabel?: string;
  isAutoComplete?: boolean;
  options?: Option[];
};

const InputCommon = (props: InputProps) => {
  const {
    name,
    placeholder,
    isShowLabel,
    labelName,
    isRequired,
    type,
    isInput = false,
    isSelect = false,
    className = "",
    classNameLabel = "",
    isAutoComplete = false,
    options = [],
  } = props;
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {isShowLabel && (
            <>
              <FormLabel className={classNameLabel}>{labelName}</FormLabel>{" "}
              {isRequired && <span className="text-red-600">*</span>}
            </>
          )}
          {isInput && (
            <FormControl>
              <Input
                autoComplete="off"
                placeholder={placeholder}
                {...field}
                className={cn(
                  "rounded-[6px] border-[#D9D9D9] focus-visible:outline-none focus-visible:shadow-none focus-visible:ring-0",
                  className
                )}
                type={type}
              />
            </FormControl>
          )}
          {isSelect && (
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger
                  className={cn(
                    "w-full rounded-[6px] border-[#D9D9D9] py-1",
                    className
                  )}
                >
                  <SelectValue placeholder={placeholder} />
                </SelectTrigger>
              </FormControl>
              {options.map((option) => (
                <SelectContent key={option.value}>
                  <SelectItem value={option.value}>{option.label}</SelectItem>
                </SelectContent>
              ))}
            </Select>
          )}

          {isAutoComplete && (
            <FormControl>
              <AutoComplete
                options={options}
                value={field.value}
                onValueChange={field.onChange}
                placeholder="Select customer"
              />
            </FormControl>
          )}

          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default InputCommon;
