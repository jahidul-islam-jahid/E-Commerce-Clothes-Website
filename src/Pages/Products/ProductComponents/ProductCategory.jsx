import React, { useEffect, useState } from "react";

function ProductCategory() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("category.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="flex gap-5">
      {categories.map((item, i) => (
        <div key={i}>
          <a className="text-lg font-semibold cursor-pointer">{item.name}</a>
        </div>
      ))}
    </div>
  );
}

export default ProductCategory;
