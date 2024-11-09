import React, { useEffect, useState } from "react";

const BRANDNAME_ARR = [
  "ブランドA",
  "ブランドB",
  "ブランドC",
  "ブランドD",
  "ブランドE",
];

const BRAND_ARR = Array.from({ length: 100 }, (_, i) => ({
  id: i,
  brand: BRANDNAME_ARR[Math.floor(Math.random() * BRANDNAME_ARR.length)],
}));

interface Brand {
  id: number;
  brand: string;
}

function SeachFilters() {
  const [inputValue, setInputValue] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const [brand, setBrand] = useState<Brand[] | []>([]);

  useEffect(() => {
    setBrand(BRAND_ARR);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    const filteredBrand = BRAND_ARR.filter((item) =>
      item.brand.includes(value),
    );
    setBrand(filteredBrand);
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectValue(value);

    const filteredBrand = BRAND_ARR.filter((item) =>
      item.brand.includes(value),
    );
    setBrand(filteredBrand);
  };

  return (
    <>
      <div className="flex items-center justify-center gap-y-2">
        <label className="text-sm" htmlFor="search">
          ブランド名
        </label>
        <input
          type="text"
          id="search"
          value={inputValue}
          onChange={handleInputChange}
          className="ml-2 h-8 w-96 rounded-md border border-gray-300 px-2"
        />
        <select
          name="brand"
          value={selectValue}
          id=""
          onChange={handleSelectChange}
        >
          {BRANDNAME_ARR.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <ul>
        {brand.map((item) => (
          <li key={item.id}>{item.brand}</li>
        ))}
      </ul>
    </>
  );
}

export default SeachFilters;
