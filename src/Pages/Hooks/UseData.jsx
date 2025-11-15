import React, { useEffect, useState } from "react";

function UseData(category) {
  // Category Data
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("category.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  //   Product data
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [isSeeMore, setIsSeeMore] = useState(true);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => {
        if (!category) {
          setAllProducts(data);
        } else {
          setAllProducts(
            data.filter((item) => item.categoryId == category)
          );
        }
        setProducts(data.slice(0, 8));
      });
  }, [category]);

  return { categories, products, allProducts, isSeeMore };
}

export default UseData;
