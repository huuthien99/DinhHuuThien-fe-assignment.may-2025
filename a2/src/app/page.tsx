"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { resetSchema, setSchemaText } from "@/store/schemaSlice";
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { DynamicForm } from "../components/DynamicForm";
import { resetForm } from "../store/formSlice";
import { persistor, RootState } from "../store/store";
import { toast } from "sonner";

export default function HomePage() {
  const dispatch = useDispatch();
  // const { data } = useSelector((state: RootState) => state.form);
  const { text, sampleData } = useSelector((s: RootState) => s.schema);

  const [value, setValue] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);

  const schemaObj = useMemo(() => {
    try {
      return text ? JSON.parse(text) : null;
    } catch {
      return null;
    }
  }, [text]);

  useEffect(() => {
    if (text) {
      setValue(text);
    }
  }, [text]);

  const handleReset = () => {
    setValue("");
    dispatch(resetSchema());
    dispatch(resetForm());
  };

  const handleRenderForm = () => {
    if (!value) toast.warning("Không có dữ liệu");

    try {
      const result = value ? JSON.parse(value) : null;
      if (result) {
        dispatch(setSchemaText(value));
      }
    } catch (error) {
      toast.error(`Không đúng định dạng ${error}`);
    }
  };

  return (
    <PersistGate loading={null} persistor={persistor}>
      <main className="max-w-2xl mx-auto p-6 space-y-4">
        <Textarea
          placeholder="Paste JSON schema here..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <div className="flex gap-2">
          <Button onClick={handleRenderForm} variant="outline">
            Render Form
          </Button>
          <Button disabled={!value} onClick={handleReset} variant="outline">
            Reset Form
          </Button>
          <Button onClick={() => setOpen(true)} variant="outline">
            Xem dữ liệu mẫu
          </Button>
          {/* <Button
            onClick={() => alert(JSON.stringify(data, null, 2))}
            variant="outline"
          >
            Xem data đã chọn
          </Button> */}
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="gap-2.5">
              <DialogHeader>
                <DialogTitle>Dữ liệu mẫu</DialogTitle>
                <DialogDescription>{sampleData}</DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>

        {schemaObj && (
          <div className="border p-4 rounded bg-gray-100">
            <DynamicForm schema={schemaObj} />
          </div>
        )}
      </main>
    </PersistGate>
  );
}
