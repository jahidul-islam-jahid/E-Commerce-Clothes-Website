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
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <Title
          title="Popular"
          secondTitle="Product's"
          description="Shop online for new arrivals and get free shipping!"
        ></Title>
        <ProductCategory></ProductCategory>
      </div>
      <div className="container mx-auto items-center flex flex-col px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <button
          onClick={() => {
            setProducts(allProducts);
            setIsSeeMore(false);
          }}
          className={`btn bg-[#516EBF] ${
            isSeeMore ? "" : "hidden"
          } px-8 md:px-24 w-fit my-8 text-white rounded-lg py-3 hover:bg-blue-700 transition-colors`}
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