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

function Input() {
  const [value, setValue] = useState("");
  const [brand, setBrand] = useState<Brand[] | []>([]);

  useEffect(() => {
    setBrand(BRAND_ARR);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setValue(value);

    const filteredBrand = BRAND_ARR.filter((item) =>
      item.brand.includes(value),
    );
    setBrand(filteredBrand);
  };

  return (
    <>
      <label className="text-sm" htmlFor="search">
        ブランド名
      </label>
      <input
        type="text"
        id="search"
        value={value}
        onChange={handleInputChange}
        className="ml-2 h-8 w-96 rounded-md border border-gray-300 px-2"
      />
      <ul>
        {brand.map((item) => (
          <li key={item.id}>{item.brand}</li>
        ))}
      </ul>
    </>
  );
}

export default Input;
