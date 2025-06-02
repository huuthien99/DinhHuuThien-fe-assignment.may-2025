"use client";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { setField } from "../store/formSlice";
import { VietnamAddressInput } from "./VietnamAddressInput";
import { Textarea } from "./ui/textarea";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

export const DynamicForm = ({ schema }: { schema: any }) => {
  const dispatch = useDispatch();
  const { data } = useSelector((state: RootState) => state.form);

  const renderComponent = (field: any) => {
    switch (field.type) {
      case "vietnamAddress":
        return <VietnamAddressInput key={field.name} name={field.name} />;
      case "textarea":
        return (
          <>
            <Label>
              {field?.label}{" "}
              {field?.required && <span className="text-red-500">*</span>}
            </Label>
            <Textarea
              id={field?.name}
              value={data[field.name] || ""}
              required={field?.required}
              onChange={(e) =>
                dispatch(setField({ key: field.name, value: e.target.value }))
              }
              placeholder={field?.placeholder || "Nhập"}
            />
          </>
        );
      case "checkbox":
        return (
          <div className="flex items-center space-x-2">
            <Checkbox
              id={field?.name}
              className="cursor-pointer"
              checked={!!data[field?.name]}
              onCheckedChange={(checked) =>
                dispatch(setField({ key: field?.name, value: checked }))
              }
            />
            <Label htmlFor={field?.name} className="cursor-pointer">
              {field?.label}
            </Label>
          </div>
        );
      case "select":
        return (
          <div className="space-y-2">
            <Label>
              {field?.label}{" "}
              {field?.required && <span className="text-red-500">*</span>}
            </Label>
            <Select
              autoComplete="true"
              onValueChange={(value) =>
                dispatch(setField({ key: field.name, value }))
              }
              value={data[field.name] || ""}
            >
              <SelectTrigger className="w-full">
                <SelectValue
                  placeholder={`${field?.placeholder || " Chọn..."}`}
                />
              </SelectTrigger>
              <SelectContent>
                {field?.options?.map((option: any) => (
                  <SelectItem key={option?.key} value={option?.key}>
                    {option?.value}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        );
      case "radio":
        return (
          <div className="space-y-2">
            <Label>
              {field?.label}{" "}
              {field?.required && <span className="text-red-500">*</span>}
            </Label>
            <RadioGroup
              value={data[field?.name] || ""}
              onValueChange={(value) =>
                dispatch(setField({ key: field.name, value }))
              }
              className="flex gap-4"
            >
              {field.options?.map((option: string) => (
                <div key={option} className="flex items-center space-x-2">
                  <RadioGroupItem
                    value={option}
                    id={`${field.name}-${option}`}
                    className="cursor-pointer"
                  />
                  <Label
                    className="cursor-pointer"
                    htmlFor={`${field.name}-${option}`}
                  >
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        );
      default:
        return (
          <div className="space-y-2">
            <Label>
              {field?.label}{" "}
              {field?.required && <span className="text-red-500">*</span>}
            </Label>
            <Input
              type={field?.type}
              required={field?.required}
              value={data[field?.name] || ""}
              onChange={(e) =>
                dispatch(setField({ key: field.name, value: e.target.value }))
              }
              placeholder={field?.placeholder || "Nhập"}
            />
          </div>
        );
    }
  };

  return (
    <form className="space-y-4">
      <h2 className="text-xl font-semibold">{schema.title}</h2>
      {schema?.fields?.map((field: any) => (
        <div key={field?.name}>{renderComponent(field)}</div>
      ))}
    </form>
  );
};
