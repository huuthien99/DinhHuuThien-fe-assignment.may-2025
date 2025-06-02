"use client";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { setField } from "../store/formSlice";
import { useEffect, useState } from "react";
import { filterVietnamProvinces } from "@/constant";
import { AutoComplete, Option } from "./common/Autocomplete";
import { Input } from "./ui/input";

export const VietnamAddressInput = ({ name }: { name: string }) => {
  const dispatch = useDispatch();
  const address = useSelector(
    (state: RootState) => state.form.data[name] || {}
  );

  const handleChange = (field: string, value: any) => {
    dispatch(setField({ key: name, value: { ...address, [field]: value } }));
  };

  const [province, setProvince] = useState<Option[]>([]);
  const [district, setDistrict] = useState<Option[]>([]);
  const [ward, setWard] = useState<Option[]>([]);

  useEffect(() => {
    const data: Option[] = filterVietnamProvinces("province", "", "")?.map(
      (val: any) => ({
        label: val.name,
        value: val.idProvince,
      })
    );
    setProvince(data);
  }, []);

  const handleChangeCity = (val: Option | null) => {
    if (!val) return;
    dispatch(
      setField({
        key: name,
        value: { ...address, city: val, district: null, ward: null },
      })
    );

    const districts = filterVietnamProvinces(
      "district",
      "idProvince",
      val.value
    )?.map((item: any) => ({ label: item.name, value: item.idDistrict }));
    setDistrict(districts);
    setWard([]);
  };

  const handleChangeDistrict = (val: Option | null) => {
    if (!val) return;
    dispatch(
      setField({
        key: name,
        value: { ...address, district: val, ward: null },
      })
    );

    const wards = filterVietnamProvinces(
      "commune",
      "idDistrict",
      val.value
    )?.map((item: any) => ({ label: item.name, value: item.idCommune }));
    setWard(wards);
  };

  const handleChangeWard = (val: Option | null) => {
    dispatch(setField({ key: name, value: { ...address, ward: val } }));
  };

  useEffect(() => {
    if (address?.city?.value) {
      const districts = filterVietnamProvinces(
        "district",
        "idProvince",
        address.city.value
      )?.map((item: any) => ({ label: item.name, value: item.idDistrict }));
      setDistrict(districts);
    }

    if (address?.district?.value) {
      const wards = filterVietnamProvinces(
        "commune",
        "idDistrict",
        address.district.value
      )?.map((item: any) => ({ label: item.name, value: item.idCommune }));
      setWard(wards);
    }
  }, [address?.city, address?.district]);

  return (
    <div className="space-y-2">
      <label className="font-medium block">Địa chỉ</label>

      <AutoComplete
        options={province}
        value={address?.city || null}
        onValueChange={handleChangeCity}
        placeholder="Chọn tỉnh/thành phố"
        onClear={() => {
          setDistrict([]);
          setWard([]);
          dispatch(
            setField({
              key: name,
              value: { city: null, district: null, ward: null },
            })
          );
        }}
      />

      <AutoComplete
        options={district}
        value={address?.district || null}
        onValueChange={handleChangeDistrict}
        placeholder="Chọn quận/huyện"
        onClear={() => {
          setWard([]);
          dispatch(
            setField({
              key: name,
              value: { ...address, district: null, ward: null },
            })
          );
        }}
      />

      <AutoComplete
        options={ward}
        value={address?.ward || null}
        onValueChange={handleChangeWard}
        placeholder="Chọn phường/xã"
      />

      <Input
        placeholder="Địa chỉ chi tiết"
        value={address?.detail || ""}
        onChange={(e) => handleChange("detail", e.target.value)}
      />
    </div>
  );
};
