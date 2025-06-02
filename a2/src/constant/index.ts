import vietnamProvinces from "@/data/vietnamProvinces.json";

const filterVietnamProvinces = (
  key: "province" | "district" | "commune",
  sortKey: "idProvince" | "idDistrict" | "",
  value: string
) => {
  const arr = vietnamProvinces[key];
  if (!Array.isArray(arr)) return [];
  if (key === "province") {
    return arr;
  } else {
    return arr.filter((item: any) => item[sortKey] == value);
  }
};

export { filterVietnamProvinces };
