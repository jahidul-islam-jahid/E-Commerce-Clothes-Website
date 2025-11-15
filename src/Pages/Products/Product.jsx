import MiniProduct from "./ProductComponents/Category";
import ProductCard from "./ProductComponents/ProductCard";
import Title from "../../Components/SharedComponents/SectionTitle/Title";
import DealProduct from "./DealProduct/DealProduct";
import UseData from "../Hooks/UseData";
import { useState } from "react";

function Product() {
  const [category, setCategoy] = useState();
  const { categories, products, allProducts, isSeeMore } = UseData(category);
  console.log(allProducts);

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
        <div className="flex gap-3 md:gap-5 overflow-x-auto py-2 scrollbar-hide">
          {categories.map((item, i) => (
            <div key={i} className="flex-shrink-0">
              <a
                onClick={() => {
                  setCategoy(item.id);
                }}
                className="text-sm md:text-lg font-semibold cursor-pointer hover:text-[#516EBF] transition-colors duration-200 whitespace-nowrap"
              >
                {item.name}
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="container mx-auto items-center flex flex-col px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
          {allProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        {/* <button
          onClick={() => {
            setProducts(allProducts);
            setIsSeeMore(false);
          }}
          className={`btn bg-[#516EBF] ${
            isSeeMore ? "" : "hidden"
          } px-8 md:px-24 w-fit my-8 text-white rounded-lg py-3 hover:bg-blue-700 transition-colors`}
        >
          View More
        </button> */}
      </div>
      <div>
        <DealProduct></DealProduct>
      </div>
    </div>
  );
}

export default Product;
