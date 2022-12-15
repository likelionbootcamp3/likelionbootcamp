import ProductFilter from "./components/ProductFilter";
import ProductGrid from "./components/ProductGrid";
import { data } from "./data";

export default function App() {
  return (
    <div>
      <ProductFilter />
      <ProductGrid products={data.products} />
    </div>
  );
}
