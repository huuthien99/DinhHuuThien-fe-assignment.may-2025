import { usePathname, useRouter, useSearchParams } from "next/navigation";

export function useQueryParams() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  function queryParams(
    paramsObj: Record<string, string | number | null | undefined>,
    replace = false
  ) {
    const params = new URLSearchParams(searchParams.toString());

    Object.entries(paramsObj).forEach(([key, value]) => {
      if (value === null || value === undefined) {
        params.delete(key);
      } else {
        params.set(key, String(value));
      }
    });

    const newUrl = `${pathname}?${params.toString()}`;

    if (replace) {
      router.replace(newUrl);
    } else {
      router.push(newUrl);
    }
  }

  return queryParams;
}
