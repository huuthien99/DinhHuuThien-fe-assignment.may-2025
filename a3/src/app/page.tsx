import { Suspense } from "react";
import ProductTablePage from "./ProductTablePage";

export default function page() {
  return (
    <Suspense>
      <ProductTablePage />
    </Suspense>
  );
}
