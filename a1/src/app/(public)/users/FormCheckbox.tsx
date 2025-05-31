"use client";
import { Checkbox } from "@/components/ui/checkbox";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { useFormContext } from "react-hook-form";

const statusOptions = ["All", "Active", "Inactive"];

export default function StatusCheckboxGroup({ name }: { name: string }) {
  const { control, setValue, watch } = useFormContext();
  const values = watch(name) || [];

  const handleChange = (value: string) => {
    if (value === "All") {
      setValue(name, ["All"]);
    } else {
      const newValues = values.includes(value)
        ? values.filter((v: string) => v !== value)
        : [...values.filter((v: string) => v !== "All"), value];

      setValue(name, newValues);
    }
  };

  return (
    <div className="">
      <h3 className="font-semibold text-[#0C0C0D] mb-2">Status</h3>
      <div className="flex flex-col gap-2">
        {statusOptions.map((option) => (
          <FormField
            key={option}
            control={control}
            name={name}
            render={() => (
              <FormItem className="flex items-center gap-4">
                <FormControl>
                  <Checkbox
                    checked={values.includes(option)}
                    onCheckedChange={() => handleChange(option)}
                    className="cursor-pointer"
                    id={option}
                  />
                </FormControl>
                <FormLabel
                  htmlFor={option}
                  className="text-[#4A4B57] cursor-pointer"
                >
                  {option}
                </FormLabel>
              </FormItem>
            )}
          />
        ))}
      </div>
    </div>
  );
}
