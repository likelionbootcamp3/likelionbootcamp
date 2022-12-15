const CategoryFilter = () => {
  return (
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text">Category</span>
      </label>
      <select className="select-bordered select">
        <option disabled selected>
          Pick one
        </option>
        <option>Star Wars</option>
        <option>Harry Potter</option>
        <option>Lord of the Rings</option>
        <option>Planet of the Apes</option>
        <option>Star Trek</option>
      </select>
    </div>
  );
};

const ProductFilter = () => {
  return (
    <div>
      {/* Container */}
      <div className="mx-auto max-w-screen-xl px-4">
        {/* Layout */}
        <div className="py-8">
          <CategoryFilter />
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;
