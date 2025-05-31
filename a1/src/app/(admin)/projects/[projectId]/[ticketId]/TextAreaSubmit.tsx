"use client";
import Send from "@/components/icons/Send";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";

const FormSchema = z.object({
  comment: z.string(),
});
function TextAreaSubmit({ className }: { className?: string }) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
  }

  return (
    <Form {...form}>
      <form className="relative" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="comment"
          render={({ field }) => (
            <FormItem>
              <FormControl className="relative">
                <Textarea
                  placeholder="Leave a comment ..."
                  className={cn(
                    "mt-6 border-0 bg-[#ECECEC] focus-visible:outline-none focus-visible:shadow-none focus-visible:ring-0",
                    className
                  )}
                  {...field}
                />
              </FormControl>
              <Button
                variant={"ghost"}
                type="submit"
                className={cn("absolute bottom-1 right-[10px] cursor-pointer")}
              >
                <Send />
              </Button>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}

export default TextAreaSubmit;
