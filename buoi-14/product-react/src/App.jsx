import { useState } from "react";
import ProductFilter from "./components/ProductFilter";
import ProductGrid from "./components/ProductGrid";
import { data } from "./data";

export default function App() {
  const [category, setCategory] = useState("default");
  const [priceRanges, setPriceRanges] = useState([]);

  const filteredProducts = data.products
    .filter((item) => {
      return item.category === category || category === "default";
    })
    .filter((item) => {
      return (
        (priceRanges.includes("lt200") && item.price > 0 && item.price < 200) ||
        (priceRanges.includes("lt500") &&
          item.price > 200 &&
          item.price < 500) ||
        (priceRanges.includes("gt500") && item.price > 500) ||
        priceRanges.length === 0
      );
    });

  return (
    <div>
      <ProductFilter
        setCategory={setCategory}
        priceRanges={priceRanges}
        setPriceRanges={setPriceRanges}
      />
      <ProductGrid products={filteredProducts} />
    </div>
  );
}
