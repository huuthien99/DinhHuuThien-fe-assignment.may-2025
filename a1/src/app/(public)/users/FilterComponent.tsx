"use client";
import InputCommon from "@/components/common/InputCommon";
import Funnel from "@/components/icons/Funnel";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import StatusCheckboxGroup from "./FormCheckbox";
import { Button } from "@/components/ui/button";
type FormValues = {
  email: string;
  userName: string | null;
  userId: string;
  userType: string;
  phone: string;
  status: string[];
};

function FilterComponent() {
  const form = useForm<FormValues>({
    defaultValues: {
      email: "",
      userName: null,
      userId: "",
      phone: "",
      userType: "",
      status: [],
    },
  });
  const onSubmit = (pData: FormValues) => {
    console.log(pData);
  };

  return (
    <div className="fixed top-[60px] z-[1px] left-0 border-r border-[#D9D9D9] p-4 w-[253px] h-[calc(100vh-60px)] min-h-[calc(100vh-60px)] flex flex-col">
      <div className="flex items-center justify-between gap-1 py-[10px] border-b border-[#D9D9D9] mb-4">
        <p className="text-[#767676] text-[16px] font-medium">FILTER</p>
        <Funnel />
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col flex-1" // dùng flex-1 thay vì h-full
        >
          <div className="space-y-4">
            <InputCommon
              name="useName"
              placeholder="Enter User name!!!"
              isShowLabel={true}
              labelName="User name"
              classNameLabel="font-semibold text-[#0C0C0D]"
              isSelect
            />
            <InputCommon
              name="userId"
              placeholder="Enter User ID!!!"
              isShowLabel={true}
              labelName="User ID"
              isInput
            />
            <InputCommon
              name="userType"
              placeholder="Enter User type!!!"
              isShowLabel={true}
              labelName="User type"
              isSelect
            />
            <InputCommon
              name="phone"
              placeholder="Enter Phone number!!!"
              isShowLabel={true}
              labelName="Phone number"
              isInput
            />
            <InputCommon
              name="email"
              placeholder="Enter Email address!!!"
              isShowLabel={true}
              labelName="Email address"
              isInput
            />
            <StatusCheckboxGroup name="status" />
          </div>

          <div className="mt-auto pt-4">
            <Button className="text-[#4A4B57] font-medium border border-[#DFE4EA] rounded-[6px] w-full bg-white hover:bg-white">
              Export Data
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}

export default FilterComponent;
