"use client";

import {
  useState,
  useRef,
  useCallback,
  type KeyboardEvent,
  useEffect,
} from "react";
import { Command as CommandPrimitive } from "cmdk";
import { Check, X } from "lucide-react";
import {
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../ui/command";
import { cn } from "@/lib/utils";
import { Skeleton } from "../ui/skeleton";

export type Option = Record<"value" | "label", string> & Record<string, string>;

type AutoCompleteProps = {
  options: Option[];
  emptyMessage?: string;
  value?: Option | null;
  onValueChange?: (value: Option | null) => void;
  isLoading?: boolean;
  disabled?: boolean;
  placeholder?: string;
  onClear?: () => void;
};

export const AutoComplete = ({
  options,
  placeholder,
  emptyMessage = "Không có dữ liệu",
  value,
  onValueChange,
  disabled,
  isLoading = false,
  onClear,
}: AutoCompleteProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isOpen, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState<string>("");

  useEffect(() => {
    if (value?.label) setInputValue(value.label);
    else setInputValue("");
  }, [value]);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      if (!inputRef.current) return;
      if (!isOpen) setOpen(true);

      if (event.key === "Enter" && inputValue) {
        const optionToSelect = options.find(
          (option) => option.label === inputValue
        );
        if (optionToSelect) onValueChange?.(optionToSelect);
        else onValueChange?.(null);
      }

      if (event.key === "Escape") {
        inputRef.current.blur();
      }
    },
    [isOpen, inputValue, options, onValueChange]
  );

  const handleBlur = useCallback(() => {
    setOpen(false);
    if (value?.label) setInputValue(value.label);
    else setInputValue("");
  }, [value]);

  const handleSelectOption = useCallback(
    (selectedOption: Option) => {
      setInputValue(selectedOption.label);
      onValueChange?.(selectedOption);
      setTimeout(() => inputRef?.current?.blur(), 0);
    },
    [onValueChange]
  );

  const handleClear = () => {
    onValueChange?.(null);
    setInputValue("");
    setOpen(false);
    // inputRef.current?.focus();
    if (onClear) onClear();
  };

  return (
    <CommandPrimitive className="w-full" onKeyDown={handleKeyDown}>
      <div className="relative flex items-center [&>div[data-slot=command-input-wrapper]]:w-full">
        <CommandInput
          ref={inputRef}
          value={inputValue}
          onValueChange={isLoading ? undefined : setInputValue}
          onBlur={handleBlur}
          onFocus={() => setOpen(true)}
          placeholder={placeholder}
          disabled={disabled}
          className="pr-3"
        />
        {value && (
          <button
            type="button"
            className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded hover:bg-slate-100"
            onClick={handleClear}
            tabIndex={-1}
          >
            <X className="w-4 h-4 text-gray-400" />
          </button>
        )}
      </div>
      <div className="relative mt-1">
        <div
          className={cn(
            "animate-in fade-in-0 zoom-in-95 absolute top-0 z-10 w-full rounded-xl bg-white outline-none",
            isOpen ? "block" : "hidden"
          )}
        >
          <CommandList className="rounded-lg ring-1 ring-slate-200">
            {isLoading && (
              <CommandPrimitive.Loading>
                <div className="p-1">
                  <Skeleton className="h-8 w-full" />
                </div>
              </CommandPrimitive.Loading>
            )}
            {!isLoading && options?.length > 0 && (
              <CommandGroup>
                {options?.map((option) => (
                  <CommandItem
                    key={option.value}
                    value={option.label}
                    onMouseDown={(event) => {
                      event.preventDefault();
                      event.stopPropagation();
                    }}
                    onSelect={() => handleSelectOption(option)}
                    className={cn(
                      "flex w-full items-center gap-2",
                      value?.value !== option.value ? "pl-8" : ""
                    )}
                  >
                    {value?.value === option?.value && (
                      <Check className="w-4" />
                    )}
                    {option?.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            )}
            {!isLoading && options.length === 0 && (
              <CommandPrimitive.Empty className="select-none rounded-sm px-2 py-3 text-center text-sm">
                {emptyMessage}
              </CommandPrimitive.Empty>
            )}
          </CommandList>
        </div>
      </div>
    </CommandPrimitive>
  );
};
