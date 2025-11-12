import React, { useEffect, useState } from "react";

function Category() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("category.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="container mx-auto py-10">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
        {categories.map((item, i) => (
          <div
            key={i}
            className={`${item.bgColor} p-6 rounded-2xl text-center shadow-sm hover:shadow-md transition`}
          >
            <img className="w-20 mx-auto" src={item.image} alt={item.name} />
            <h2 className="font-bold pt-4 text-lg">{item.name}</h2>
            <p className="text-sm mt-1">
              Item: <strong>{item.items}</strong>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
