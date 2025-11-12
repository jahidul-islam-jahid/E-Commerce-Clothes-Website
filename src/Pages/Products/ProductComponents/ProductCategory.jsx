import React, { useEffect, useState } from "react";

function ProductCategory() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("category.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  
  return (
    <div className="flex gap-3 md:gap-5 overflow-x-auto py-2 scrollbar-hide">
      {categories.map((item, i) => (
        <div key={i} className="flex-shrink-0">
          <a className="text-sm md:text-lg font-semibold cursor-pointer hover:text-[#516EBF] transition-colors duration-200 whitespace-nowrap">
            {item.name}
          </a>
        </div>
      ))}
    </div>
  );
}

export default ProductCategory;