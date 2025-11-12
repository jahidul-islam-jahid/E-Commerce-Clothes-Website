import React, { useEffect, useState } from "react";

function Category() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("category.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="container mx-auto py-8 md:py-10 px-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-8">
        {categories.map((item, i) => (
          <div
            key={i}
            className={`${item.bgColor} p-4 sm:p-6 rounded-2xl text-center shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 cursor-pointer`}
          >
            <img
              className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 mx-auto object-contain"
              src={item.image}
              alt={item.name}
            />
            <h2 className="font-bold pt-3 sm:pt-4 text-sm sm:text-base md:text-lg">
              {item.name}
            </h2>
            <p className="text-xs sm:text-sm mt-1">
              Item: <strong>{item.items}</strong>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
