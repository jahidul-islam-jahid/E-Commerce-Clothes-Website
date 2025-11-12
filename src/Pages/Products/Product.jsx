import React, { useEffect, useState } from "react";
import MiniProduct from "./ProductComponents/Category";
import ProductCard from "./ProductComponents/ProductCard";
import Title from "../../Components/SharedComponents/SectionTitle/Title";
import ProductCategory from "./ProductComponents/ProductCategory";
import DealProduct from "./DealProduct/DealProduct";

function Product() {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [isSeeMore, setIsSeeMore] = useState(true);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
        setProducts(data.slice(0, 8));
      });
  }, []);

  return (
    <div className="py-5">
      <div className="container mx-auto items-center flex flex-col">
        <MiniProduct></MiniProduct>
      </div>
      <div className="container mx-auto flex items-center justify-between">
        <Title
          title="Popular"
          secondTitle="Product's"
          description="Shop online for new arrivals and get free shipping!"
        ></Title>
        <ProductCategory></ProductCategory>
      </div>
      <div className="container mx-auto items-center flex flex-col">
        <div className="grid grid-cols-4 gap-10">
          {products.map((product) => (
            <ProductCard product={product} />
          ))}
        </div>
        <button
          onClick={() => {
            setProducts(allProducts);
            setIsSeeMore(false);
          }}
          className={`btn bg-[#516EBF] ${
            isSeeMore ? "" : "hidden"
          } px-24 w-fit my-8 text-white`}
        >
          View More
        </button>
      </div>
      <div>
        <DealProduct></DealProduct>
      </div>
    </div>
  );
}

export default Product;
